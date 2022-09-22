import 'modern-normalize';
import { Container } from './components/common/Container.styled';
import { Title } from './components/common/Title.styled';
import { Form } from './components/Form/Form';
import { Filter } from './components/Filter/Filter';
import { ContactsList } from './components/Contacts/ContactsList';

export function App() {
  return (
    <Container>
      <Title>Contact App</Title>
      <Form />
      <Title>Search by name</Title>
      <Filter />
      <ContactsList />
    </Container>
  );
}
