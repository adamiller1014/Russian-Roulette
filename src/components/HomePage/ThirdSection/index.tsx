import React, {
  lazy,
  Suspense,
  Component,
  ErrorInfo,
  ReactNode,
  useState,
  useCallback
} from 'react';
import ShadowButton from '../../../shared/ShadowButton';

const TopWinnersHeader = lazy(() => import('./TopWinnersHeader'));
const TopWinnersList = lazy(() => import('./TopWinnersList'));

const LoadingFallback = () => <div className="animate-pulse bg-gray-200 h-[full] w-full"></div>;
const BonusModal = lazy(() => import('../FirstSection/BonusModal'));
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
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const ThirdSection: React.FC = () => {
  const [isBonusModalOpen, setIsBonusModalOpen] = useState(false);
  const handleBuyBonusClick = useCallback(() => {
    setIsBonusModalOpen(true);
  }, []);

  const handleCloseBonusModal = useCallback(() => {
    setIsBonusModalOpen(false);
  }, []);

  const handleSelectBonus = useCallback((bonusType: string) => {
    console.log(`Selected bonus: ${bonusType}`);
    // Add logic to handle the selected bonus
    setIsBonusModalOpen(false);
  }, []);

  return (
    <section className="xl:flex hidden flex-col gap-1 text-white xl:col-span-3 col-span-0 h-[calc(100vh-150px)]">
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <div className="h-full ">
            <TopWinnersHeader />
            <TopWinnersList />
            <ShadowButton
              onClick={handleBuyBonusClick}
              className={`
              flex-1 flex justify-center items-center text-center transition-all duration-200 font-bold
              bg-[#f8bf60] text-black shadow-[0_5px_0_0_rgba(153,122,73,1)] hover:brightness-110 rounded-md h-[100px] w-full
            `}>
              BONUS
            </ShadowButton>
            <BonusModal
              isOpen={isBonusModalOpen}
              onClose={handleCloseBonusModal}
              onSelectBonus={handleSelectBonus}
            />
          </div>
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default React.memo(ThirdSection);
