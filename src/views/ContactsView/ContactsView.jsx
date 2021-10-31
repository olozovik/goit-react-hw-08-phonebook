import { Toaster } from 'react-hot-toast';
import { AddContact } from 'components/contactsPage/AddContact/AddContact';
import { Header } from 'components/_common/Header/Header';
import { MainContacts } from '../../components/contactsPage/MainContacts/MainContacts';

const ContactsView = () => {
  return (
    <>
      <Header contactsPage={true} />
      <AddContact />
      <MainContacts />
      <Toaster />
    </>
  );
};

export default ContactsView;
