import photo from  './../../assets/photo.jpg';
import React from 'react'
import './About.scss'
import Typewriter from 'typewriter-effect';
import {ListGroup,Card,CardGroup,Container,Row,Col,CardColumns } from 'react-bootstrap'

const About = () => {
    
    return (
<div className="about">
<CardGroup >
<Row className='justify-content-md-center'>
<Col md={4}>
<Card border="light">    
    <Card.Img  variant="flush" alt='my image' src={photo} className="myimage" fluid rounded/>
 </Card>
 </Col>
 <Col md={8}>
  <Card border="light">
      <Card.Body>
    <Card.Title className='name'><Typewriter
  options={{
    strings: ['Subhasree Vadukoot'],
    autoStart: true,
    loop: true,
  }}
/></Card.Title>
      
      <Card.Text className='job'>
      Software Engineer II at Dell Technologies
      </Card.Text>
      {/* <Card.Text className='desc'>
      <p align='justify'>Software Engineering for me is a beautiful blend of logic and creativity</p>
      <p align='justify'>When I am not coding or learning to code in a new language, I love to read novels and write poetry. 
        Yeah, so my long term goal is to become a spontaneous mix of a poet and a developer !</p>
      <p align='justify'>P.S : This porfolio is a work in progress, and it will always be.</p>
      </Card.Text> */}
      <Card.Text className='icons'>
      <p></p>
     
      <a style={{textDecoration:'none', color:'black'}} 
      href="https://github.com/subhasreevadukoot"
      target='_blank' rel="noreferrer">  <span><i class="fab fa-github" aria-hidden="true"></i></span></a>
     <a style={{textDecoration:'none', color:'black'}}href="https://www.linkedin.com/in/subhasree-vadukoot/"
     target='_blank' rel="noreferrer"> <span> <i class="fab fa-linkedin"></i></span></a>
     
      </Card.Text>
   
      </Card.Body>
   
   </Card>
   </Col>
      </Row>
  
  </CardGroup>
  <p></p><p></p>
  <CardColumns id='details' className="d-flex justify-content-center about-section">
    <Container max-width='50%'>

   <Row>
   <Col>
   <div className="about-section-experience">
  <Card>
  <i class="fas fa-laptop-code"></i>
    <Card.Body>
      <Card.Title className="about-head">Experience</Card.Title>
      <Card.Text className="about-text">
      <p><strong>Software Engineer II at Dell Technolgies </strong></p>
      <p>
      <ul>
        <li>Building applications that help Dell Support Agents resolve issues with various Dell Assets like Powerstores and Poweredges real time.</li>
      
<li>Involved in the complete lifecycle of software development in a team that follows TDD and DevOps Culture</li>
<li>Technologies: Kotlin, Angular, SpringBoot, Microservices, Docker, JUnit, Jasmine, Jest</li>

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
      <Card.Title className="about-head">Skills</Card.Title>
      <Card.Text className="about-text">
      <ListGroup variant="flush">

  <ListGroup.Item >Java, SpringBoot, R, HTML </ListGroup.Item>
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

export default About
