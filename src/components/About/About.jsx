import photo from  './../../assets/photo.png';
import degree from  './../../assets/degree.png';
import programming from  './../../assets/programming.png';
import books from  './../../assets/books.png';
import React from 'react'
import './About.scss'
import Typewriter from 'typewriter-effect';
import {ListGroup,Card,CardGroup,Nav,Button,Form,FormControl,Container,Row,Col,CardColumns } from 'react-bootstrap'
const About = () => {
    
    return (
<div className="about">
<CardGroup >
<Card border="light">
<Row className='justify-content-md-center'>
    <Col xs={4} md={6}>
    <Card.Img  variant="flush" alt='my image' src={photo} className="myimage" rounded/>
    
    </Col>
</Row>
 </Card>
  <Card border="light">
      <Card.Body>
    <Row className='justify-content-md-center'>
        <Col>
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
      I have completed my Master's in Big Data Analytics and Bachelor's in Computer Science, Mathematics and Electronics.
      I am a bit of everything that I have learnt and experienced, but my current interest and strongest passion is for the Web. I am amazed by its scale, depth and the endless opportunities
      . Okay, I know, who doesn't love the Web anyways? 
      <p>When I am not coding or learning, I love to read novels and write poetry. 
        <p></p>Yeah, so my ambition is to become a spontaneous mix of a poet and a developer !</p>
      
      </Card.Text>
      <Card.Text className='icons'>
      <p></p>
      <span><i class="fab fa-facebook fa-lg" ></i></span>
      <span><i class="fab fa-instagram fa-lg"></i></span>
      <span> <i class="fab fa-linkedin fa-lg"></i></span>
      <span> <i class="fab fa-twitter fa-lg"></i></span>
      </Card.Text>
      </Col>
      </Row>
    </Card.Body>
   
  </Card>
  </CardGroup>
  
  <CardColumns className="d-flex justify-content-center about-section">
 
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
  <div className="about-section-languages">

  <Card>
  <i class="far fa-keyboard"></i>
    <Card.Body>
      <Card.Title className="about-head">Programming Languages and Frameworks</Card.Title>
      <Card.Text className="about-text">
      <ListGroup variant="flush">
      <ListGroup.Item >React, Django</ListGroup.Item>
  <ListGroup.Item >JavaScript, Java, Python</ListGroup.Item>
  <ListGroup.Item>MySQL, Oracle</ListGroup.Item>
  <ListGroup.Item>R, HTML, CSS </ListGroup.Item>
  <ListGroup.Item><strong>Tools:</strong> Visual Studio Code, Toad, Weka, RStudio, Jupyter Notebook, Tableau, IntelliJ</ListGroup.Item>
</ListGroup>
      </Card.Text>
    </Card.Body>
  </Card>
 
  </div>
</CardColumns>


        </div>
    )
}

export default About
