import { Toaster } from 'react-hot-toast';
import { RegistrationForm } from 'components/authPages/RegistrationForm/RegistrationForm';
import { Header } from '../../components/_common/Header/Header';
import { AuthFormText } from 'components/authPages/AuthFormText/AuthFormText';
import { AuthFromTitle } from 'components/authPages/AuthFromTitle/AuthFromTitle';

const RegistrationView = () => {
  return (
    <>
      <Header link="/login" buttonText="Log In" />
      <AuthFromTitle>Create account: </AuthFromTitle>
      <RegistrationForm />
      <AuthFormText text="Already registered? - Log In" link="/login" />
      <Toaster />
    </>
  );
};

export default RegistrationView;
