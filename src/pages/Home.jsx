import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/conf3.jpeg";
import image2 from "../images/conferenceimage1.jpg";
import image3 from "../images/conf2.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

function Home() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            src={image1}
            alt=" One"
            style={{ height: "500px", width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Educate members on International Trade </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image2}
            alt=" Two"
            style={{ height: "500px", width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Promote sustainable development</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image3}
            alt=" Three"
            style={{ height: "500px", width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Organizing events </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="home-events">
        <Container className="home-events" >
          <h2 className="haha">Our upcoming events</h2>
          <Row>
            <Col>
              <img src={image1} alt="Event1" style={{ width: "80%" }} />
            </Col>
            <Col className="ags">
              <h2>AFRICAN GLOBAL SUMMIT</h2>
              <h4>
                <AiFillCalendar /> 30th AUGUST 2023
              </h4>
              <h4>
                <AiFillClockCircle /> 9AM-7PM
              </h4>
              <h4>
                <FaLocationArrow /> TORONTO,CANADA
              </h4>
              <button >
                REGISTER
             </button>        
            </Col>
          </Row>
        </Container>
        <Container>
        <h3>Who We Are</h3>
        <p>
          Canadian Center to empower Enterpreneurs is a leading and respected
          business authority that drives economic and social growth by fostering
          stronger commercial relations between businesses and other
          stakeholders who wish to corroborate.CCEE brings together business
          leaders, enterpreneurs, investors ,government agencies into one stop
          center where members are provided with a forum to network identify
          discuss and pursue common interests regarding their activities
        </p>
        <h3>Our activities include the following</h3>
        </Container>
        {/* <Container>
        <Row><PiNumberCircleOneFill/><p>We offer a lot of actovoty pnmwrsvfas </p></Row>
        <Row><PiNumberCircleTwoFill/>To educate members on e</Row>
        <Row>We offer alot of activafg afgkTo educattrade</Row>
      </Container> */}
        <Container>
          <Row>
            <Col>
              <img src={image2} alt="hadf" sizes="40px" />
            </Col>
            <Col>
              <img src={image2} alt="hadf" sizes="40px" />
            </Col>
            <Col>
              <img src={image3} alt="hadf" sizes="40px" />
            </Col>
            <Col>
              <img src={image2} alt="hadf" sizes="40px" />
            </Col>
            <Col>
              <img src={image3} alt="hadf" sizes="40px" />
            </Col>
          </Row>
        </Container>

        {/* This is where i will put many images that can be displayed on the home screen  */}

        <h6>2023 Canadian Center To Empower Enterpreneurs</h6>
      </div>
    </>
  );
}

export default Home;
