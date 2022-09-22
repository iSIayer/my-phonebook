import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from 'redux/filter';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const handleItemsFilter = e => {
    dispatch(filterItems(e.target.value));
  };
  return (
    <Input
      placeholder="Type name..."
      type="text"
      name="name"
      onChange={handleItemsFilter}
      value={filter}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
