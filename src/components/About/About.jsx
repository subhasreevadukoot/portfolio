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
      Technology Analyst at Bank of America
      </Card.Text>
      <Card.Text className='desc'>
      <p align='justify'>Having spent five years (BSc -> MSc -> Career) in Software Development I realize that I am happy when I am coding and elated when the code is compiled, or now may be when the PR is merged !!I absolutely love the Web and all things <q>Web</q>! I have completed my Master's in Big Data Analytics and Bachelor's in Computer Science, Mathematics and Electronics.
      I am a bit of everything that I have learnt and experienced, but most of my time now is spent in VS Code, Chrome Dev Tools and the console. I am amazed by the scale, depth and the endless opportunities
      of software development. </p>
      <p align='justify'>When I am not coding or learning to code in a new language, I love to read novels and write poetry. 
        Yeah, so my long term goal is to become a spontaneous mix of a poet and a developer !</p>
      <p align='justify'>P.S : This porfolio is a work in progress, and it will always be.</p>
      </Card.Text>
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

export default About
