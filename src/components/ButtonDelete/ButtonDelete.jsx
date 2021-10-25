import { useEffect, useRef, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { ButtonDeleteStyled } from './ButtonDelete.styled';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';

const ButtonDelete = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const contacts = useSelector(phonebookSelectors.getContacts);

  const theme = useTheme();
  const dispatch = useDispatch();

  const handleDeleteButton = async () => {
    setIsLoading(true);
    await dispatch(phonebookOperations.fetchDeleteContact(id));
  };

  const activeColor = useRef(theme.buttonActiveHover);

  useEffect(() => {
    if (!isLoading) return;

    const deleteToastSettings = {
      icon: (
        <TiDelete style={{ color: activeColor.current, fontSize: '30px' }} />
      ),
      duration: 2000,
    };

    toast('The contacts is deleted', deleteToastSettings);
    setIsLoading(false);
  }, [isLoading, contacts]);

  return (
    <ButtonDeleteStyled type="button" onClick={() => handleDeleteButton(id)}>
      <span>Delete</span>
      <TiDelete />
    </ButtonDeleteStyled>
  );
};

export { ButtonDelete };
