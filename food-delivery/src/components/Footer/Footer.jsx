import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import logo from "../../assets/images/res-logo.png";
import "../../style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                reprehenderit
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thrusday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: ZindaBazar, Sylheat=3100</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 0123455678</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">News-letter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, website made by Laman All. All Rights Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex   gap-4 justify-content-end">
              <p m-0>Follow: </p>
              <span>
                <Link to="/">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/lemanall">
                  <i className="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.youtube.com/channel/UCV289oO1a861MrRlHWzPSbQ">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/leman-allahverdiyeva-248a85206/">
                  <i class="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
