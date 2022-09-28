import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Nav>
      <Nav.Link as={NavLink} to="/register">
        Реєстрація
      </Nav.Link>
      <Nav.Link as={NavLink} to="/login">
        Увійти
      </Nav.Link>
    </Nav>
  );
};
