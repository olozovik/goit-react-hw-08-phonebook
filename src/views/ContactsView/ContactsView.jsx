import { Toaster } from 'react-hot-toast';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsHeadingStyled } from './ContactsView.styled';
import { Header } from 'components/_common/Header/Header';

const ContactsView = () => {
  return (
    <>
      <Header contactsPage={true} />
      <ContactForm />
      <ContactsHeadingStyled>Contacts</ContactsHeadingStyled>
      <Filter />
      <ContactList />
      <Toaster />
    </>
  );
};

export default ContactsView;
