import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Input } from 'components/_share/Input/Input';
import { FormStyled, LabelsWrapper } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getError,
} from '../../redux/phonebook/phonebook-selectors';
import { fetchAddContact } from '../../redux/phonebook/phonebook-operations';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
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
    await dispatch(fetchAddContact({ name, number }));
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
    <FormStyled autoComplete={'off'} onSubmit={handleSubmit}>
      <LabelsWrapper>
        <label>
          <span>Name:</span>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required={true}
            value={name}
            onChange={handleOnChange}
          />
        </label>
        <label>
          <span>Number:</span>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required={true}
            value={number}
            onChange={handleOnChange}
          />
        </label>
      </LabelsWrapper>
      <button type="submit">Add contact</button>
    </FormStyled>
  );
};

export { ContactForm };
