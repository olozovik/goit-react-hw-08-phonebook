import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from 'components/Header/Header';
import { Page } from 'components/Page/Page';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { CreateAccountHeading, ToLogin } from './RegistrationView.styled';

const RegistrationView = () => {
  return (
    <>
      <Page>
        <Wrapper>
          <Header />
          <CreateAccountHeading>Create account:</CreateAccountHeading>
          <RegistrationForm />
          <ToLogin>
            Already registered? - {<Link to="/login">Login in</Link>}
          </ToLogin>
        </Wrapper>
      </Page>
      <Toaster />
    </>
  );
};

export default RegistrationView;
