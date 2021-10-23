import { MainHeading } from 'components/MainHeading/MainHeading';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Page } from 'components/Page/Page';
import { Link } from 'react-router-dom';

const LoginView = () => {
  return (
    <>
      <Page>
        <Wrapper>
          <MainHeading />
          <p>
            Have you not registered yet? - {<Link to="/register">Sign Up</Link>}
          </p>
          <h2>Login</h2>
          <hr />
        </Wrapper>
      </Page>
    </>
  );
};

export default LoginView;
