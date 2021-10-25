import { TiDelete } from 'react-icons/ti';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteContact } from '../../redux/phonebook/phonebook-operations';
import { ButtonDeleteStyled } from './ButtonDelete.styled';
import { useEffect, useState } from 'react';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import { toast } from 'react-hot-toast';

const ButtonDelete = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const contacts = useSelector(getContacts);

  const theme = useTheme();
  const dispatch = useDispatch();

  const handleDeleteButton = async () => {
    setIsLoading(true);
    await dispatch(fetchDeleteContact(id));
  };

  useEffect(() => {
    if (!isLoading) return;

    const deleteToastSettings = {
      icon: (
        <TiDelete
          style={{ color: theme.buttonActiveHover, fontSize: '30px' }}
        />
      ),
      duration: 2000,
    };

    toast('The contacts is deleted', deleteToastSettings);
    setIsLoading(false);
  }, [isLoading, contacts, theme.buttonActiveHover]);

  return (
    <ButtonDeleteStyled type="button" onClick={() => handleDeleteButton(id)}>
      <span>Delete</span>
      <TiDelete />
    </ButtonDeleteStyled>
  );
};

export { ButtonDelete };
