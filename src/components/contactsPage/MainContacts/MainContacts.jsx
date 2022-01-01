import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContainerMd } from '../../_share/Container/Container';
import { TitleContactsStyled } from './ManeContacts.styled';

export const MainContacts = () => {
  return (
    <>
      <ContainerMd>
        <TitleContactsStyled>Contacts</TitleContactsStyled>
        <Filter />
        <ContactList />
      </ContainerMd>
    </>
  );
};
