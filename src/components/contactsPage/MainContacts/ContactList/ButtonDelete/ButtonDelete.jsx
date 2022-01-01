import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import {
  DeleteForeverOutlined,
  AutorenewOutlined,
  Clear,
} from '@mui/icons-material';
import { Button } from '@mui/material';
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

  const activeColor = useRef(theme.buttonActiveHover);

  useEffect(() => {
    if (!isLoading) return;

    const deleteToastSettings = {
      icon: <DeleteForeverOutlined style={{ fontSize: '30px' }} />,
      duration: 2000,
    };

    toast('The contacts is deleted', deleteToastSettings);
    setIsLoading(false);
  }, [isLoading, contacts]);

  return (
    // <Button type="button" onClick={() => handleDeleteButton(id)}>
    //   {isLoading ? <AutorenewOutlined /> : <DeleteButtonStyled />}
    // </Button>
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