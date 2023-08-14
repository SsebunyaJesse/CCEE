import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"


function About() {
  return (

        <Container>
          <Row>

            <Col>
            <p className=''>
            Canadian Center to empower Enterpreneurs is a leading and respected business authority that drives economic and social growth
            by fostering stronger commercial relations between businesses and other stakeholders who wish to corroborate.CCEE brings together
            business leaders, enterpreneurs, investors ,government agencies into one stop center where members are provided with a forum to network identify discuss and pursue common interests regarding their activities 
          </p></Col>    
          </Row>

          <h4>Main Activities</h4>
          <h6> 1.Educate members on international trade and provide advice, support and export 
            documentation information particularly in regards to Canada and other nations.</h6>
          <h6> 2. Promote sustainable development and transfer of Know how between Canada and other nations through capacity building and joint initiatives</h6>
          <h6> 3.Organizing events such as trade shows conferences, workshops and training 
            as the need arises to achieve the above stated goals</h6>
            <Button>Button As Link</Button>
          
          </Container>
    //   </div>
    // </div>
  )
}

export default About