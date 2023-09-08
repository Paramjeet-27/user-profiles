import { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BsFillBrightnessHighFill, BsMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const { isDark, toggle } = useContext(ThemeContext);

  return (
    <>
      <Navbar bg={isDark ? "dark" : "success"} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Sokovia Enterprises</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Profiles</Nav.Link>
            <Nav.Link href="#">Add User</Nav.Link>
          </Nav>
          <Nav>
            {isDark ? (
              <Button onClick={toggle} variant={!isDark ? "info" : "warning"}>
                <BsFillBrightnessHighFill size={20} />
              </Button>
            ) : (
              <Button onClick={toggle} variant={!isDark ? "info" : "warning"}>
                <BsMoonStarsFill size={20} />
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
