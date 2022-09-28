import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selector';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { AuthNav } from 'components/UserMenu/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { motion } from 'framer-motion';

const Header = () => {
  const user = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="color-nav"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              Phonebook
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="navbar-collapse collapse justify-content-between"
            >
              <Nav>
                <Nav.Link active as={NavLink} to="/">
                  Головна
                </Nav.Link>
                {user && (
                  <Nav.Link as={NavLink} to="/contacts">
                    Контакти
                  </Nav.Link>
                )}
              </Nav>
              <Nav>{user ? <UserMenu /> : <AuthNav />}</Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </>
  );
};

export default Header;
