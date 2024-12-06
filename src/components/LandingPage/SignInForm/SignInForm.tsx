import { useAuth } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/Button';
import Form from '../../../shared/Form';
import TextInput from '../TextInput';
import { validation } from './validation';
import axios from 'axios';

const SignInForm = () => {
  const { userEmail, setUserEmail, userPassword, setUserPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // Send email and password in the request body
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
        email: userEmail, 
        password: userPassword, 
      });

      if (response.status === 200) {
        // Handle successful login, e.g., save token
        console.log('Login successful:', response.data);
        // Optionally, store token or user data in localStorage/sessionStorage
        localStorage.setItem('authToken', response.data.token);
        navigate('/home'); // Redirect to the home page
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      // Handle errors and show a meaningful message to the user
      console.error('Login failed:', error.response?.data || error.message);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validationSchema={validation}
      className="w-full flex flex-col gap-4"
    >
      <TextInput
        labelFloating="text-white left-[16px] bg-clip-border xl:translate-y-[calc(-100%-1px)] lg:translate-y-[calc(-100%-4px)] translate-y-[calc(-100%-7px)] scale-85 absolute duration-1 transition "
        labelNormal="text-white left-[16px] absolute transition "
        type="text" // Use email input type for better validation
        id="userEmail"
        name="userEmail"
        value={userEmail}
        onChange={setUserEmail}
        placeholder=""
        label="EMAIL"
      />
      <TextInput
        labelFloating="text-white left-[16px] bg-clip-border xl:translate-y-[calc(-100%-1px)] lg:translate-y-[calc(-100%-4px)] translate-y-[calc(-100%-7px)] scale-85 absolute duration-1 transition "
        labelNormal="text-white left-[16px] absolute transition "
        type="password"
        id="userPassword"
        name="userPassword"
        value={userPassword}
        onChange={setUserPassword}
        placeholder=""
        label="PASSWORD"
      />
      <Button
        type="submit"
        className="!rounded-[5px] !h-[40px] hover:mix-blend-difference !bg-[#f8bf60] text-black"
        disableClass="bg-[#a3a09b] !h-[40px] !rounded-[5px] !transform-none"
      >
        PLAY NOW
      </Button>
    </Form>
  );
};

export default SignInForm;
