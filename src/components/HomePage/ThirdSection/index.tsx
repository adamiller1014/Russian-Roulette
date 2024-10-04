import React, { lazy, Suspense, Component, ErrorInfo, ReactNode } from 'react';

const TopWinnersHeader = lazy(() => import('./TopWinnersHeader'));
const TopWinnersList = lazy(() => import('./TopWinnersList'));
const PlayButtonArea = lazy(() => import('./PlayButtonArea'));

const LoadingFallback = () => <div className="animate-pulse bg-gray-200 h-[full] w-full"></div>;

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const ThirdSection: React.FC = () => {
  return (
    <section className="md:col-span-3 text-white flex flex-col gap-1 order-3 md:h-screen h-fit">
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <TopWinnersHeader />
          <TopWinnersList />
          <PlayButtonArea />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default React.memo(ThirdSection);
