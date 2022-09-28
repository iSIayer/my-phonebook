import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  useGetContactByNameQuery,
  useDeleteContactMutation,
} from 'components/api/phonebookApi';
import { getFilter } from 'redux/contacts/contactsSlice';
import Table from 'react-bootstrap/Table';
import { Loader } from 'components/Loader/Loader';
import {
  ContainerList,
  Title,
  ContactListButton,
  AttentionText,
} from './ContactsList.styled';
import { motion } from 'framer-motion';
import { MdDeleteSweep } from 'react-icons/md';

const ContactsList = () => {
  const filter = useSelector(getFilter);
  const { data = [], isLoading } = useGetContactByNameQuery();
  const [onClickDelete] = useDeleteContactMutation();

  const dataFilter = () => {
    return data.filter(item => item.name.toLowerCase().includes(filter));
  };

  let contacts = filter === '' ? data : dataFilter();

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.6 }}
    >
      <ContainerList>
        <Title>Контакти</Title>
        {isLoading && <Loader />}
        {data.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ім'я контакту</th>
                <th>Номер контакту</th>
                <th>Видалити</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(({ id, name, number }) => (
                <tr key={id} className="text">
                  <td>{name}</td>
                  <td>{number}</td>
                  <td>
                    <ContactListButton onClick={() => onClickDelete(id)}>
                      <MdDeleteSweep size={20} />
                    </ContactListButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <AttentionText>У Вас ще немає контактів :(</AttentionText>
        )}
      </ContainerList>
    </motion.div>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  name: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
