import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wrapper, TextTyped, Title, Button } from './HomePage.styled';
import authSelectors from 'redux/auth/auth-selector';

const HomePage = () => {
  const el = useRef(null);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Wrapper>
      <TextTyped ref={el}></TextTyped>
      <Title
        as={motion.h1}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 2.5 }}
      >
        Phonebook
      </Title>
      {!isLoggedIn && (
        <motion.div
          initial={{ x: -340, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 3.5 }}
        >
          <Button
            as={Link}
            to="/register"
            className="home-page__button"
            variant="secondary"
          >
            Реєстрація
          </Button>
          <Button as={Link} to="/login" variant="secondary">
            Увійти
          </Button>
        </motion.div>
      )}
    </Wrapper>
  );
};

export default HomePage;
