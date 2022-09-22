import {
  useGetContactByNameQuery,
  useAddContactMutation,
} from 'api/phonebookApi';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import {
  ContactForm,
  ContactLabel,
  ContactField,
  ErrorText,
  Button,
  ButtonIcon,
} from './Form.styled';
import * as yup from 'yup';

const onValidate = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().length(7).required(),
});

export const Form = () => {
  const { data: items } = useGetContactByNameQuery();
  const [addContact] = useAddContactMutation();

  const normalizedName = str => {
    const normalizedName = str
      .split(' ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ');
    return normalizedName;
  };

  const normalizedNumber = str => {
    const normalizedNumber =
      str[0] + str[1] + str[2] + '-' + str[3] + str[4] + '-' + str[5] + str[6];
    return normalizedNumber;
  };

  const validateContact = data => {
    const normalizedValue = data.name.toLowerCase();
    const result = items.find(item =>
      item.name.toLowerCase().includes(normalizedValue)
    );
    return result;
  };

  const handleSubmit = (values, { resetForm }) => {
    const newName = {
      id: nanoid(),
      name: normalizedName(values.name),
      number: normalizedNumber(values.number),
    };
    if (validateContact(newName)) {
      alert(`${newName.name} already exist`);
      return;
    } else {
      addContact(newName);
    }
    resetForm();
  };

  // console.log(handleSubmit);
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={onValidate}
      onSubmit={handleSubmit}
    >
      {props => (
        <ContactForm>
          <ContactLabel>
            Name:
            <ContactField
              type="text"
              name="name"
              onChange={props.handleChange}
              value={props.values.name}
            />
            <ErrorMessage
              name="name"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </ContactLabel>
          <ContactLabel>
            Number:
            <ContactField
              type="tel"
              name="number"
              onChange={props.handleChange}
              value={props.values.number}
            />
            <ErrorMessage
              name="number"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </ContactLabel>
          <Button type="submit">
            <ButtonIcon />
            Add contact
          </Button>
        </ContactForm>
      )}
    </Formik>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
