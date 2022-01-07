import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Clear } from '@mui/icons-material';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import { DeleteButtonStyled } from './ButtonDelete.styled';

const ButtonDelete = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const contacts = useSelector(phonebookSelectors.getContacts);

  const theme = useTheme();
  const dispatch = useDispatch();

  const handleDeleteButton = async () => {
    setIsLoading(true);
    await dispatch(phonebookOperations.fetchDeleteContact(id));
  };

  useEffect(() => {
    if (!isLoading) return;

    const deleteToastSettings = {
      icon: (
        <Clear style={{ fontSize: '30px', color: theme.deleteButtonColor }} />
      ),
      duration: 2000,
    };

    toast('The contacts is deleted', deleteToastSettings);
    setIsLoading(false);
  }, [isLoading, contacts, theme.deleteButtonColor]);

  return (
    <>
      <DeleteButtonStyled
        type="button"
        onClick={() => handleDeleteButton(id)}
        title="Delete"
      >
        <Clear />
      </DeleteButtonStyled>
    </>
  );
};

export { ButtonDelete };
