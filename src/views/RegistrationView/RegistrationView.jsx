import { MainHeading } from 'components/MainHeading/MainHeading';
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
          <MainHeading />
          {/*Have you already registered? <Link>Login In</Login>*/}
          <p>
            Have you already registered? - {<Link to="/login">Login In</Link>}
          </p>
          <h2>Sign Up</h2>
          <hr />
          <RegistrationForm />
        </Wrapper>
      </Page>
      <Toaster />
    </>
  );
};

export default RegistrationView;
