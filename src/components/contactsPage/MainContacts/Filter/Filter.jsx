import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { phonebookReducer } from 'redux/phonebook';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { TextFieldStyled } from './Filter.styled';

function Filter() {
  const [filterValue, setFilterValue] = useState('');

  const handleInputValue = e => {
    setFilterValue(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookReducer.changeFilter(filterValue));
  }, [dispatch, filterValue]);

  return (
    <TextFieldStyled
      size="small"
      fullWidth
      type="text"
      label="Find contact"
      value={filterValue}
      onChange={handleInputValue}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search sx={{ fontSize: '30px' }} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export { Filter };
