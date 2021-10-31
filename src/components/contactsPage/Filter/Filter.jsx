import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { phonebookReducer } from 'redux/phonebook';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

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
    <Grid container spacing={2} sx={{ mb: '30px' }}>
      <Grid item xs={12} sm={5} sx={{ ml: 'auto' }}>
        <TextField
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
      </Grid>
    </Grid>
  );
}

export { Filter };
