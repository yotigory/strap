import { Container, Row, Col, Button } from "reactstrap";

export const Header = () => {
  return (
    <header className="border-bottom mt-2">
      <Container className="themed-container" fluid="lg">
        <Row className="d-flex align-items-center">
          <Col xs="10">
            <h1>管理画面</h1>
          </Col>
          <Col xs="2" className="d-flex justify-content-end">
            <Button color="primary">Logout</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
