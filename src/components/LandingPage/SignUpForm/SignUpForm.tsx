import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/Button';
import Form from '../../../shared/Form';
import TextInput from '../TextInput';
import UsernameInput from '../../../shared/UsernameInputBox/UsernameInput';
import { validation } from './validation';

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    userName: '',
    useremail: '',
    userpass: '',
    userpass2: '',
  });

  const [errors, setErrors] = useState({
    userName: '',
    useremail: '',
    userpass: '',
    userpass2: '',
  });

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (field: string, value: string) => {
    setFormValues({ ...formValues, [field]: value });

    // Validate field
    const { error } = validation.validate({ [field]: value }, { abortEarly: false });
    setErrors({
      ...errors,
      [field]: error ? error.details[0].message : '',
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setServerError('');

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, {
        username: formValues.userName,
        email: formValues.useremail,
        password: formValues.userpass,
      });
      if (response.status === 200) {
        console.log('Signup successful:', response.data);
        localStorage.setItem('authToken', response.data.token);
        navigate('/home'); // Redirect to the home page
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setServerError(error.response?.data?.error || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} validationSchema={validation} className="w-full flex flex-col gap-[15px]">
      {/* Updated UsernameInput with correct onChange handler */}
      <UsernameInput
        value={formValues.userName}
        onChange={(e) => handleChange('userName', e.target.value)} 
      />
      {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}

      {/* Updated TextInput components with correct onChange handler */}
      <TextInput
        type="text"
        placeholder=""
        id="useremail"
        name="useremail"
        value={formValues.useremail}
        onChange={(value: string) => handleChange('useremail', value)}
        label="EMAIL"
        labelFloating="text-white left-[16px] bg-clip-border xl:translate-y-[calc(-100%-1px)] lg:translate-y-[calc(-100%-4px)] translate-y-[calc(-100%-7px)] scale-85 absolute duration-1 transition"
        labelNormal="text-white left-[16px] absolute transition"
        textAlign="center"
      />
      {errors.useremail && <p className="text-red-500 text-sm">{errors.useremail}</p>}

      <div className="flex flex-row gap-[1px]">
        <TextInput
          type="password"
          placeholder=""
          id="userpass"
          name="userpass"
          value={formValues.userpass}
          onChange={(value: string) => handleChange('userpass', value)}
          label="PASSWORD"
          labelFloating="text-white left-[16px] bg-clip-border xl:translate-y-[calc(-100%-1px)] lg:translate-y-[calc(-100%-4px)] translate-y-[calc(-100%-7px)] scale-85 absolute duration-1 transition"
          labelNormal="text-white left-[16px] absolute transition"
        />

        <TextInput
          type="password"
          placeholder=""
          id="userpass2"
          name="userpass2"
          value={formValues.userpass2}
          onChange={(value: string) => handleChange('userpass2', value)}
          label="RE-ENTER PASSWORD"
          labelFloating="text-white left-[16px] bg-clip-border xl:translate-y-[calc(-100%-1px)] lg:translate-y-[calc(-100%-4px)] translate-y-[calc(-100%-7px)] scale-85 absolute duration-1 transition"
          labelNormal="text-white left-[16px] absolute transition"
          />
      </div>
      {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

      <Button
        type="submit"
        disableClass="bg-[#a3a09b] !h-[40px] !rounded-[5px] !transform-none"
        className="!rounded-[5px] !h-[40px] hover:mix-blend-difference !bg-[#f8bf60] text-black"
      >
        {loading ? 'Submitting...' : 'Sign Up'}
      </Button>
    </Form>
  );
};

export default SignUpForm;
