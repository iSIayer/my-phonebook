import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Main from '../../Layout/Main/Main.styled';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        style={{
          position: 'absolute',
          top: '35px',
          left: '18px',
        }}
        size={25}
        onClick={() => navigate('/')}
      >
        {' '}
        Назад
      </Button>
      <Main style={{ height: '100vh' }}>
        <h1>Вибачте сторінка не існує</h1>
        <Outlet />
      </Main>
    </>
  );
};

export default ErrorPage;
