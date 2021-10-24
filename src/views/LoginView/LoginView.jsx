import { MainHeading } from 'components/MainHeading/MainHeading';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Page } from 'components/Page/Page';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const LoginView = () => {
  return (
    <>
      <Page>
        <Wrapper>
          <MainHeading />
          <h2>Enter to your account:</h2>
          <p>Not registered yet? - {<Link to="/register">Sign Up</Link>}</p>
          <hr />
          <LoginForm />
        </Wrapper>
      </Page>
      <Toaster />
    </>
  );
};

export default LoginView;
