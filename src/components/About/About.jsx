import photo from  './../../assets/photo.jpg';
import React from 'react'
import './About.scss'
import Typewriter from 'typewriter-effect';
import {ListGroup,Card,CardGroup,Container,Row,Col,CardColumns } from 'react-bootstrap'
import Info from '../Info/Info';
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
      <p align='justify'>I have strong experience in Software Development and I love the Web and all things <q>Web</q>! I have completed my Master's in Big Data Analytics and Bachelor's in Computer Science, Mathematics and Electronics.
      I am a bit of everything that I have learnt and experienced, but most of my time now is spent in VS Code, Chrome Dev Tools and the console. I am amazed by the scale, depth and the endless opportunities
      of software development. </p>
      <p align='justify'>When I am not coding or learning to code in a new language, I love to read novels and write poetry. 
        Yeah, so my long term goal is to become a spontaneous mix of a poet and a developer !</p>
      
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
<Info/>


        </div>
    )
}

export default About
