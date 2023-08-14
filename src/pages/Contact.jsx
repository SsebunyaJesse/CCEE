import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3qy9tqm",
        "template_8guk82h",
        form.current,
        "JI50sQbhK-u-7AP0i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <section>
        <Container>
          <div className="container">
            <Row>
              <Col className="contact-col">
                <h3>Feel free to talk to the team</h3>
                <h2 className="">Contact Us</h2>
                <h5>Contact Us and the team will get back to you asap</h5>
              </Col>
              <Col>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="--form-control --card --flex-center --dir-column"
                >
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    placeholder="full name "
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    id=""
                    placeholder="email "
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    id=""
                    placeholder="subject "
                    required
                  />
                  <textarea name="message" id="" cols="30" rows="10"></textarea>
                  <button type="submit" className="--btn --btn-primary">
                    Send Message
                  </button>
                </form>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
