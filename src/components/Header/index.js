import { Container, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <Container as="header" fluid>
      <Row className="py-1 text-white" style={{ background: "#ff6666" }}>
        <h1>React Test App</h1>
      </Row>
    </Container>
  );
};
