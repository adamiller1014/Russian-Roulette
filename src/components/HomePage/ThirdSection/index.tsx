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
    <section className="flex flex-col order-3 gap-1 text-white xl:col-span-3 col-span-0 xl:h-screen h-fit">
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
        <div className='hidden xl:block'>
          <TopWinnersHeader />
          <TopWinnersList />
        <PlayButtonArea />
      </div>
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default React.memo(ThirdSection);
