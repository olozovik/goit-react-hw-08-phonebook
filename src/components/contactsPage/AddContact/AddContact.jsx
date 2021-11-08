import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { TextField } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import { ContainerMd } from 'components/_share/Container/Container';
import {
  FormStyled,
  AddContactStyled,
  InputsWrapperStyled,
  ButtonStyled,
  TitleStyled,
} from './AddContactStyled';

const AddContact = () => {
  const contacts = useSelector(phonebookSelectors.getContacts);
  const error = useSelector(phonebookSelectors.getError);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setName('');
    setNumber('');
  }, [contacts.length]);

  const handleOnChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'number':
        return setNumber(e.target.value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const isContactExisting = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isContactExisting) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    setIsLoading(true);
    await dispatch(phonebookOperations.fetchAddContact({ name, number }));
  };

  useEffect(() => {
    if (!isLoading) return;

    if (error) {
      toast.error('The contacts is not added');
      setIsLoading(false);
      return;
    }

    toast.success('The contacts is added');
    setIsLoading(false);
  }, [contacts, error, isLoading]);

  return (
    <AddContactStyled>
      <ContainerMd>
        <TitleStyled>Add contact: </TitleStyled>
        <FormStyled autoComplete="off" onSubmit={handleSubmit}>
          <InputsWrapperStyled>
            <TextField
              size="small"
              fullWidth
              label="Name"
              type="text"
              name="name"
              required={true}
              onChange={handleOnChange}
              value={name}
              inputProps={{
                pattern:
                  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                title:
                  "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
              }}
            />
            <TextField
              size="small"
              fullWidth
              label="Number"
              type="tel"
              name="number"
              required={true}
              onChange={handleOnChange}
              value={number}
              inputProps={{
                pattern:
                  '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
                title:
                  'Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +',
              }}
            />
          </InputsWrapperStyled>
          <ButtonStyled type="submit">
            <PersonAdd
              sx={{ display: 'block', fontSize: '55px', mb: '-7px' }}
            />
          </ButtonStyled>
        </FormStyled>
      </ContainerMd>
    </AddContactStyled>
  );
};

export { AddContact };
