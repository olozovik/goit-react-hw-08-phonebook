import { Toaster } from 'react-hot-toast';
import { LoginForm } from 'components/authPages/LoginForm/LoginForm';
import { Header } from 'components/_common/Header/Header';
import { AuthFormText } from 'components/authPages/AuthFormText/AuthFormText';
import { AuthFromTitle } from 'components/authPages/AuthFromTitle/AuthFromTitle';

const LoginView = () => {
  return (
    <>
      <Header link="/register" buttonText="Sign up" />
      <AuthFromTitle>Enter to your account: </AuthFromTitle>
      <LoginForm />
      <AuthFormText text="Not registered? - Sing up" link="/register" />
      <Toaster />
    </>
  );
};

export default LoginView;
