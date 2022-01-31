import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonDelete } from './ButtonDelete/ButtonDelete';
import { phonebookSelectors, phonebookOperations } from 'redux/phonebook';
import { StyledTable, TableWrapper } from './ContactListStyled';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);

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

  return (
    <TableWrapper>
      {filterResultStatus === 'no contacts' && <p>There are no contacts.</p>}
      {filterResultStatus === 'not found' && (
        <p>There are no contacts with this name.</p>
      )}
      <StyledTable>
        <tbody>
          {filteredContacts?.reverse().map(({ id, name, number }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{number}</td>
                <td>
                  <ButtonDelete id={id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}

export { ContactList };
