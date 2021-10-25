import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from 'components/Header/Header';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Page } from 'components/Page/Page';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { ToRegister } from './LoginView.styled';

const LoginView = () => {
  return (
    <>
      <Page>
        <Wrapper>
          <Header />
          <LoginForm />
          <ToRegister>
            Not registered yet? - {<Link to="/register">Sign up</Link>}
          </ToRegister>
        </Wrapper>
      </Page>
      <Toaster />
    </>
  );
};

export default LoginView;
