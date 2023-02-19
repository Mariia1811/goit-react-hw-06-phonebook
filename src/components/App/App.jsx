import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import FormElem from 'components/FormElem';
import { Wrapper, MainTitle, Title } from './App.styled';

function App() {
  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <FormElem />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </Wrapper>
  );
}

export default App;
