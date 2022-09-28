import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/')}> Назад</Button>
      <h1>Вибачте</h1>
      <h2>Сторінка не існує</h2>
    </>
  );
};

export default ErrorPage;
