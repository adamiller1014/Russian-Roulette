import { useState } from 'react';
import Layout from '../Layout';
import Button from '../../shared/Button';
import SignModal from './SignModal';
import './styles.css';
import CylinderImg from '../../assets/images/cylinder.svg';
import LogoImg from '../../assets/images/logo.svg';

const LandingPage = () => {
  const [isVisibleSignModal, setIsVisibleSignModal] = useState(false);
  return (
    <Layout type="base">
      <header>
          <img src={LogoImg} alt="Logo" className="logo" />
          <nav>
              <Button className="headerLogin text-white p-[0.625rem] text-[1rem] lg:text-[0.8rem] md:text-[0.6rem] sm:text-[0.5rem]" 
                onClick={() => {
                  setIsVisibleSignModal(true);
                }}
              >
              LOG IN
              </Button>
              <Button className="headerSignup">SIGN UP</Button>
          </nav>
      </header>
      <main>
          <section>
              <img src={CylinderImg} alt="Profits illustration" className="heroimage" />
          </section>
          <section className="heroText">
              <h1 className="heroHeadline">
                YIELD INFINITE&nbsp;<span className="text-[#F6BF61]">PROFITS&nbsp;</span> - WIN, COMPOUND, REPEAT
              </h1>
              <p className="heroSubheadline">
                Leverage the power of endless compounding returns with our lucrative betting and staking system.
              </p>
          </section>
          <Button className="ctaButton" 
            onClick={() => {
              setIsVisibleSignModal(true);
            }}
          >
            PLAY NOW
          </Button>
      </main>
      <SignModal 
        isVisible={isVisibleSignModal} 
        setIsVisible={setIsVisibleSignModal} 
      />
    </Layout>
  );
};

export default LandingPage;
