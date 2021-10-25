import { useDispatch } from 'react-redux';
import { phonebookReducer } from 'redux/phonebook';
import { Input } from 'components/_share/Input/Input';
import { LabelStyled } from './Filter.styled';
import { useEffect, useState } from 'react';

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
    <LabelStyled>
      <span>Find contacts by name:</span>
      <Input type="text" value={filterValue} onChange={handleInputValue} />
    </LabelStyled>
  );
}

export { Filter };
