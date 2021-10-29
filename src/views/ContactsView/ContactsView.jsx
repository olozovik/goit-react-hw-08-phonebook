import { Toaster } from 'react-hot-toast';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { HeaderOld } from 'components/_common/HeaderOld/HeaderOld';
import { Page } from 'components/Page/Page';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { ContactsHeadingStyled } from './ContactsView.styled';

const ContactsView = () => {
  return (
    <>
      <Page>
        <Wrapper>
          <HeaderOld logoutButton />
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
