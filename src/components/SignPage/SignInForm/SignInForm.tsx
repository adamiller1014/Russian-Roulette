import { useAuth } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/Button';
import Form from '../../../shared/Form';
import TextInput from '../TextInput';
import { validation } from './validation';

const SignInForm = () => {
  const { userName, setUserName, userPassword, setUserPassword } = useAuth();
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={async () => {
        navigate('/');
      }}
      validationSchema={validation}
      className="w-full flex flex-col  gap-4"
    >
      <TextInput
        labelFloating="text-white left-[16px] bg-clip-border xl:translate-y-[calc(-100%-1px)] lg:translate-y-[calc(-100%-4px)] translate-y-[calc(-100%-7px)] scale-85 absolute duration-1 transition "
        labelNormal="text-white left-[16px] absolute transition "
        type="text"
        id="userName"
        name="userName"
        value={userName}
        onChange={setUserName}
        placeholder=""
        label="USERNAME"
      />
      <TextInput
        labelFloating="text-white left-[16px] bg-clip-border xl:translate-y-[calc(-100%-1px)] lg:translate-y-[calc(-100%-4px)] translate-y-[calc(-100%-7px)] scale-85 absolute duration-1 transition "
        labelNormal="text-white left-[16px] absolute transition "
        type="password"
        id="userpass"
        name="userpass"
        value={userPassword}
        onChange={setUserPassword}
        placeholder=""
        label="PASSWORD"
      />
      <Button
        type="submit"
        className="!rounded-[5px] !h-[40px]
                    hover:mix-blend-difference !bg-[#f8bf60] text-black"
        disableClass="bg-[#a3a09b] !h-[40px] !rounded-[5px] !transform-none"
      >
        PLAY NOW
      </Button>
    </Form>
  );
};

export default SignInForm;
