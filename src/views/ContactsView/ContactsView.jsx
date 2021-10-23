import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsHeadingStyled } from './ContactsView.styled';
import { MainHeading } from 'components/MainHeading/MainHeading';
import { Page } from 'components/Page/Page';
import { Wrapper } from 'components/Wrapper/Wrapper';

const ContactsView = () => {
  return (
    <>
      <Page>
        <Wrapper>
          <MainHeading />
          <ContactForm />
          <ContactsHeadingStyled>Contacts</ContactsHeadingStyled>
          <Filter />
          <ContactList />
        </Wrapper>
      </Page>
    </>
  );
};

export default ContactsView;
