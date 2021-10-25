import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';
import { phonebookSelectors, phonebookOperations } from 'redux/phonebook';
import {
  FirstColumn,
  LoadMoreButton,
  SecondColumn,
  TableStyled,
} from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);

  const perPageContacts = 10;
  const [page, setPage] = useState(1);
  const handleLoadMoreButton = () => setPage(p => p + 1);

  const [filterResultStatus, setFilterResultStatus] = useState('idle');
  const filter = useSelector(phonebookSelectors.getFilter);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    if (!filter && contacts.length) setFilterResultStatus('idle');
    if (!filter && !contacts.length) setFilterResultStatus('no contacts');
    if (filter && !filteredContacts.length) setFilterResultStatus('not found');
  }, [contacts.length, filteredContacts.length, filter]);

  const numberContactsToShow = perPageContacts * page;
  const isLoadMore = numberContactsToShow < filteredContacts.length;

  return (
    <>
      {filterResultStatus === 'no contacts' && (
        <p>There are no contacts here yet.</p>
      )}
      {filterResultStatus === 'not found' && (
        <p>There are no contacts with this name.</p>
      )}
      <TableStyled>
        <tbody>
          {filteredContacts
            ?.reverse()
            .slice(0, numberContactsToShow)
            .map(({ id, name, number }) => {
              return (
                <tr key={id}>
                  <FirstColumn>{name}</FirstColumn>
                  <SecondColumn>{number}</SecondColumn>
                  <td>
                    <ButtonDelete id={id} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </TableStyled>
      {isLoadMore && (
        <LoadMoreButton type="button" onClick={handleLoadMoreButton}>
          Show more contacts...
        </LoadMoreButton>
      )}
    </>
  );
}

export { ContactList };
