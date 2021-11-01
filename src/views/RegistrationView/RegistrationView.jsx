import { Toaster } from 'react-hot-toast';
import { RegistrationForm } from 'components/authPages/RegistrationForm/RegistrationForm';
import { Header } from '../../components/_common/Header/Header';
import { AuthFormText } from 'components/authPages/AuthFormText/AuthFormText';
import { AuthFormTitle } from 'components/authPages/AuthFormTitle/AuthFormTitle';

const RegistrationView = () => {
  return (
    <>
      <Header link="/login" buttonText="Log In" />
      <AuthFormTitle>Create account: </AuthFormTitle>
      <RegistrationForm />
      <AuthFormText text="Already registered? - Log In" link="/login" />
      <Toaster />
    </>
  );
};

export default RegistrationView;
