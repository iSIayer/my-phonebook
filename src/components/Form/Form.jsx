import { useState } from 'react';
import {
  useGetContactByNameQuery,
  useAddContactMutation,
} from 'components/api/phonebookApi';
import PhoneInput from 'react-phone-number-input';
import { LineWave } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css';
import Input from 'components/Input';
import { FormContainer, Button } from './Form.styled';

const Form = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: items } = useGetContactByNameQuery();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    if (number.length > 13) {
      return alert('Введіть корректний номер телефону!');
    }

    const checkName = items.find(el => el.name === name);

    checkName === undefined
      ? addContact({ name, number })
      : toast.error(`${name} вже є в телефонній книзі!.`, {
          position: toast.POSITION.TOP_CENTER,
          theme: 'dark',
        });

    e.preventDefault();
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.5 }}
    >
      <FormContainer onSubmit={handleSubmit}>
        <Input
          onChange={handleInputChange}
          title="Моя телефонна книга"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Тарас Шевченко"
        />
        <PhoneInput
          defaultCountry="UA"
          onChange={number => {
            setNumber(number);
          }}
          region="Europe"
          title="Number"
          type="tel"
          name="number"
          value={number}
          placeholder="Введіть номер контакту"
          autoComplete="off"
          international
          className="inputPhone"
          maxLength="16"
        />
        <Button disabled={isLoading} onSubmit={handleSubmit}>
          {isLoading && <LineWave height="16" width="16" color="#fff" />}
          Додати контакт
        </Button>
      </FormContainer>
    </motion.div>
  );
};

export default Form;
