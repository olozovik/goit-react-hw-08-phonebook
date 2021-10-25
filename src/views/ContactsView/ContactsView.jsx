import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsHeadingStyled } from './ContactsView.styled';
import { Header } from 'components/Header/Header';
import { Page } from 'components/Page/Page';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Toaster } from 'react-hot-toast';

const ContactsView = () => {
  return (
    <>
      <Page>
        <Wrapper>
          <Header logoutButton />
          <ContactForm />
          <ContactsHeadingStyled>Contacts</ContactsHeadingStyled>
          <Filter />
          <ContactList />
        </Wrapper>
      </Page>
      <Toaster />
    </>
  );
};

export default ContactsView;
