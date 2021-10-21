import {
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export const Plan = () => {
  return (
    <div>
      <div>
        <Jumbotron>
          <h1 className="display-3">プラン</h1>
          <p className="lead">申し込まれているプランの一覧を表示します。</p>
          <hr className="my-2" />
        </Jumbotron>
      </div>
      <Row>
        <Col xs="4" className="mt-4">
          <Card>
            <CardBody>
              <CardTitle className="text-success" tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>プランを変更する</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="4" className="mt-4">
          <Card>
            <CardBody>
              <CardTitle className="text-success" tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>プランを変更する</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="4" className="mt-4">
          <Card>
            <CardBody>
              <CardTitle className="text-success" tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>プランを変更する</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="4" className="mt-4">
          <Card>
            <CardBody>
              <CardTitle className="text-success" tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>プランを変更する</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="4" className="mt-4">
          <Card>
            <CardBody>
              <CardTitle className="text-success" tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>プランを変更する</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
