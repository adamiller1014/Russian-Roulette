import LandingPage from '../../components/LandingPage';
import AuthProvider from '../../providers/AuthProvider';

const Landing = () => (
  <AuthProvider>
    <LandingPage />
  </AuthProvider>
);

export default Landing;
