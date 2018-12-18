import React from "react";
import { Row, Col } from "reactstrap";
import "./SecondExample.css";

const SecondExample = () => (
  <div className="SecondExample">
    <p className="SecondExample-text">
      Based on Facebook's {"\u00A0"}
      <a
        className="SecondExample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/facebookincubator/create-react-app"
      >
        Create react app
      </a>
    </p>
    <a
      className="SecondExample-github-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/DimiMikadze/create-react-library"
    >
      Documentation
    </a>
    <Row>
      <Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur igitur
        easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non
        intellegatur?
      </Col>
      <Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur igitur
        easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non
        intellegatur?
      </Col>
      <Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur igitur
        easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non
        intellegatur?
      </Col>
      <Col>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur igitur
        easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non
        intellegatur?
      </Col>
    </Row>
  </div>
);

export default SecondExample;
