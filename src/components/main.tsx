import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Menu } from "./menu";
import { Home } from "./home";
import { Set } from "./set";
import { Plan } from "./plan";

export const Main = () => {
  const [current, setCurrent] = useState<string>("home");
	const onClickMenu = (e:any) => {
		e.preventDefault();
		setCurrent(e.currentTarget.getAttribute('data-current'));
		console.log(e.currentTarget.getAttribute('data-current'));
  };

  return (
    <main className="mt-5">
      <Container className="themed-container pb-5" fluid="lg">
        <Row>
          <Col md="3" className="mb-3">
            <Menu current={current} onClickMenu={onClickMenu}></Menu>
          </Col>
					<Col md="9">
						{current == "home" && <Home></Home>}
						{current == "set" && <Set></Set>}
						{current == "plan" && <Plan></Plan>}
          </Col>
        </Row>
      </Container>
    </main>
  );
};
