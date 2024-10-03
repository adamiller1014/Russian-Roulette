import { useAuth } from '../../../providers/AuthProvider';
import Button from '../../../shared/Button';
import Modal from '../../../shared/Modal';
import Divider from '../Divider';
import ForgotTab from '../ForgotTab';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import SocialButtons from '../SocialButtons';

const SignModal = () => {
  const { tab, setTab } = useAuth();
  return (
    <Modal
      classNames="lg:w-[560px] md:w-[400px] !gap-0 w-[95%]"
      onClose={() => {
        return;
      }}
      showCloseButton
      title="Sign"
      isVisible={true}
      isSign
    >
      <div
        className="flex flex-col
        gap-[10px]
        xl:text-[12px] lg:text-[9.6px] md:text-[7.2px] text-[8px]
        "
      >
        <div className=" m-[20px] flex flex-col gap-[10px]">
          <div
            className="flex flex-row gap-0
              border-b-[1px] border-[#1c2127] pb-[15px]"
          >
            <Button
              onClick={() => {
                setTab('signin');
              }}
              className={`${
                tab === 'signin'
                  ? 'hover:mix-blend-difference !bg-[#f8bf60] text-black'
                  : 'hover:bg-[#21262c] bg-[#1c2127] text-white'
              }
            !rounded-l-[5px] !flex-1 !h-[40px]`}
            >
              SIGN IN
            </Button>
            <Button
              onClick={() => {
                setTab('signup');
              }}
              className={`${
                tab === 'signup'
                  ? 'hover:mix-blend-difference !bg-[#f8bf60] text-black'
                  : 'hover:bg-[#21262c] bg-[#1c2127] text-white'
              }
            !rounded-r-[5px] !flex-1 !h-[40px]`}
            >
              CREATE AN ACCOUNT
            </Button>
          </div>
          {tab === 'signin' ? <SignInForm /> : <SignUpForm />}
          <Divider className="py-[2vh]" />
          <SocialButtons />
        </div>
        <ForgotTab />
        <div
          className="absolute bottom-[-50px]
        text-white flex text-center flex-col w-full opacity-50
        lg:text-[8px] md:text-[6px] xl:text-[10px]"
        >
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
            apply.
          </p>
          <p>
            By accessing the site I attest that I am at least 18 years old and have read the Terms
            of Service
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default SignModal;
