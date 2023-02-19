import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactSlise';
import { selectFilterValue } from 'redux/selectContacts';
import { FilterWrap, Input, Text } from './Filter.styled';

function Filter() {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

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
