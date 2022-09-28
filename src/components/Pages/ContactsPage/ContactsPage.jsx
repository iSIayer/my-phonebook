import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selector';
import { useGetContactByNameQuery } from 'components/api/phonebookApi';
import { MainContainer } from './ContactsPage.styled';
import Container from 'components/Container';
import Form from 'components/Form';
import List from 'components/Contacts';
import Filter from 'components/Filter';

const ContactsPage = () => {
  const { data } = useGetContactByNameQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <MainContainer>
      <Container>
        <Form />
        {isLoggedIn && data && (data.length > 1 ? <Filter /> : '')}
        <List />
      </Container>
    </MainContainer>
  );
};

export default ContactsPage;
