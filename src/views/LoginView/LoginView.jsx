import { Toaster } from 'react-hot-toast';
import { LoginForm } from 'components/authPages/LoginForm/LoginForm';
import { Header } from 'components/_common/Header/Header';
import { AuthFormText } from 'components/authPages/AuthFormText/AuthFormText';
import { AuthFormTitle } from 'components/authPages/AuthFormTitle/AuthFormTitle';

const LoginView = () => {
  return (
    <>
      <Header link="/register" buttonText="Sign Up" />
      <AuthFormTitle>Enter to your account: </AuthFormTitle>
      <LoginForm />
      <AuthFormText text="Not registered? - Sign Up" link="/register" />
      <Toaster />
    </>
  );
};

export default LoginView;
