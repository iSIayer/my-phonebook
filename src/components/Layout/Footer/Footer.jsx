import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Navbar variant="dark" className="color-footer">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item className="text-footer">
              Developed by Ihor Kolontaievsky <span>©</span> 2022
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Footer;
