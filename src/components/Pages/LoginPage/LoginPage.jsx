import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { GrMailOption, GrLock } from 'react-icons/gr';
import {
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
  Title,
} from '../RegisterPage/RegisterPage.styled';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    dispatch(authOperations.logIn(data));
    reset();
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Вхід до телефонної книги</Title>
        <ErrorMessage>
          {errors?.name && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
        </ErrorMessage>
        <Label>
          Пошта
          <Input
            type="email"
            {...register('email', {
              required: 'Повинна бути електронна пошта!',
              pattern: {
                value:
                  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                message: 'Please enter a valid email «example@mail.com»',
              },
            })}
          />
          <GrMailOption
            style={{
              position: 'absolute',
              top: '35px',
              left: '8px',
            }}
            size={25}
          />
        </Label>
        <ErrorMessage>
          {errors?.email && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}
        </ErrorMessage>
        <Label>
          Password
          <Input
            type="password"
            {...register('password', {
              required: 'Повинен бути пароль!',
            })}
          />
          <GrLock
            style={{
              position: 'absolute',
              top: '35px',
              left: '8px',
            }}
            size={25}
          />
        </Label>
        <ErrorMessage>
          {errors?.password && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
        </ErrorMessage>
        <Button type="submit">Увійти</Button>
      </Form>
    </motion.div>
  );
};

export default Login;
