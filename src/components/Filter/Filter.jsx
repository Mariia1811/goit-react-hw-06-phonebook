import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';
import { selectFilterValue } from 'redux/selectContacts';
import { FilterWrap, Input, Text } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  
  return (
    <FilterWrap>
      <Text>Find contacts by name</Text>
      <Input
        name="filter"
        type="text"
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </FilterWrap>
  );
}

export default Filter;
