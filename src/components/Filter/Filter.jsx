import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { filter, getFilter } from 'redux/contacts/contactsSlice';
import { SearchContainer, SearchTitle, Input } from './Filter.styled';
import { motion } from 'framer-motion';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleItemsFilter = e => {
    dispatch(filter(e.currentTarget.value.toLocaleLowerCase().trim()));
  };

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.5 }}
    >
      <SearchContainer>
        <SearchTitle>Пошук контакту за ім'ям</SearchTitle>
        <Input
          type="text"
          value={value}
          onChange={handleItemsFilter}
          placeholder="Знайти контакт"
        />
      </SearchContainer>
    </motion.div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
