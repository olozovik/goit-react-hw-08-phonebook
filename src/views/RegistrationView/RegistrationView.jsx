import { Header } from 'components/Header/Header';
import { Page } from 'components/Page/Page';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Toaster } from 'react-hot-toast';

const RegistrationView = () => {
  return (
    <>
      <Page>
        <Wrapper>
          <Header />
          <h2>Create account:</h2>
          <p>Already registered? - {<Link to="/login">Login In</Link>}</p>
          <hr />
          <RegistrationForm />
        </Wrapper>
      </Page>
      <Toaster />
    </>
  );
};

export default RegistrationView;
