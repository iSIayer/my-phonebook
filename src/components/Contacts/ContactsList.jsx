import { useSelector } from 'react-redux';
import {
  useGetContactByNameQuery,
  useDeleteContactMutation,
} from 'api/phonebookApi';
import PropTypes from 'prop-types';
import {
  ContactsListItem,
  ContactsListButton,
  ContactsListIcon,
} from './ContactsList.styled';
import { Loader } from 'components/Spinner/Loader';

export const ContactsList = () => {
  const filter = useSelector(state => state.filter.value);
  const { data: items, isLoading } = useGetContactByNameQuery();
  const [onClickDelete] = useDeleteContactMutation();

  const dataFilter = () => {
    if (items) {
      const normalizedValue = filter.toLowerCase();
      const filteredArray = items.filter(option =>
        option.name.toLowerCase().includes(normalizedValue)
      );
      return filteredArray;
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {items &&
          dataFilter().map(({ id, name, phone }) => {
            return (
              <ContactsListItem key={id}>
                {name}: {phone}
                <ContactsListButton
                  onClick={() => {
                    onClickDelete(id);
                  }}
                >
                  <ContactsListIcon />
                  Delete
                </ContactsListButton>
              </ContactsListItem>
            );
          })}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
