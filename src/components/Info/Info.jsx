import React from 'react'
import {ListGroup,Card,CardGroup,Container,Row,Col,CardColumns } from 'react-bootstrap'
import './Info.scss'
const Info = () => {
    return (
        <div>
              <CardColumns id='details' className="d-flex justify-content-center about-section">
    <Container>

   <Row>
   <Col>
   <div className="about-section-experience">
  <Card>
  <i class="fas fa-laptop-code"></i>
    <Card.Body>
      <Card.Title className="about-head">Experience</Card.Title>
      <Card.Text className="about-text">
      <p><strong>Technology Analyst, Bank of America </strong></p>
      <p>
      <ul>
        <li>Designing and maintaining Technology Applications built using Oracle, Java and AngularJS for critical regulatory reporting purposes.</li>
      
<li>Collaborating with QA team to create efficient test plans and scripts while working together in an Agile team and participating in code review using BitBucket, Git and Agile tools.</li>
<li>Gathering and translating requirements to technical design specifications keeping scalability in mind.</li>
<li>Writing clean, robust code adhering to the standards and using version control to collaborate with other developers thereby ensuring smooth deployment and release.</li>
<li>Acting as a buddy to the Interns in the team by providing Knowledge Transfer and overall support.  </li>
</ul>
      </p>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
   
   </Col>
 </Row>
 <Row>
   <Col>
   <div className="about-section-education">
  <Card>
  <i class="fas fa-user-graduate"></i>
    <Card.Body>
      <Card.Title className="about-head">Education</Card.Title>
      <Card.Text className="about-text">
      <strong>Master's in Big Data Management and Analytics </strong> 
       <p>Griffith College Dublin</p>
       <strong>Results:</strong> 1.1 First Class Honors
      <p>Awarded Best Academic Achievement Award</p> 
      <strong>Bachelor's in Computer Science, Mathematics and Electronics</strong> 
       <p>CHRIST (Deemed to be) University,Bangalore</p>
       <strong>Results:</strong> CGPA - 9.85 in 10 point Scale
      <p>Awarded First Rank</p> 
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
   </Col>
   </Row>
<Row>
  <Col>
  <div className="about-section-subject">
  <Card>
  <i class="fas fa-book"></i>
    <Card.Body>
      <Card.Title className="about-head">Subject Areas</Card.Title>
      <Card.Text className="about-text">
      <ListGroup variant="flush">
      <ListGroup.Item >Web Development, Object Oriented Programming, Computer networks</ListGroup.Item>
      <ListGroup.Item >Data Structures and Algorithms</ListGroup.Item>
  <ListGroup.Item >Big Data Analytics, Big Data Management, Applied Data Analytics</ListGroup.Item>
  <ListGroup.Item>Database Management Systems and Software Engineering, Data Structures and
Operating Systems</ListGroup.Item>
  <ListGroup.Item>Cloud Computing, Concurrent and Parallel Programming</ListGroup.Item>
  <ListGroup.Item>Linear Algebra, Complex Analysis, Differential Calculus, Embedded Systems</ListGroup.Item>
</ListGroup>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  </Col>
  </Row>
   <Row>
  <Col>
  <div className="about-section-languages">

  <Card>
  <i class="far fa-keyboard"></i>
    <Card.Body>
      <Card.Title className="about-head">Programming Languages and Frameworks</Card.Title>
      <Card.Text className="about-text">
      <ListGroup variant="flush">
      <ListGroup.Item >React, Redux, Django, Node JS</ListGroup.Item>
  <ListGroup.Item >JavaScript, Java, Python, HTML </ListGroup.Item>
  <ListGroup.Item>MySQL, Oracle</ListGroup.Item>
  <ListGroup.Item>BootStrap, CSS, SASS </ListGroup.Item>
  <ListGroup.Item><strong>Tools:</strong> Visual Studio Code, Toad, Weka, RStudio, Jupyter Notebook, Tableau, IntelliJ, Chrome Dev Tools</ListGroup.Item>
  <ListGroup.Item>Agile, Scrum, Git, BitBucket</ListGroup.Item>
</ListGroup>
      </Card.Text>
    </Card.Body>
  </Card>
 
  </div>
  </Col>
</Row>
</Container>
  
</CardColumns>
        </div>
    )
}

export default Info
