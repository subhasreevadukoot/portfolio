import React from 'react'
import {ListGroup,Card,CardDeck,Nav,Button,Form,FormControl,Container,Row,Col,CardColumns } from 'react-bootstrap'
import './Work.scss'
import ui from  './../../assets/ui.png';
import vanillajs from  './../../assets/vanillajs.png';
import react from  './../../assets/react.png';
import python from  './../../assets/python.png';
import thesis from  './../../assets/thesis.png';
import datamining from  './../../assets/datamining.png';
import Overlay from 'react-bootstrap/Overlay'

const Work = () => {
    return (
        <div>
<CardDeck className="d-flex justify-content-center projects">
    <Row>
  <Card >
  
    <Card.Body>
   
      <Card.Img variant="top" src={react}/>
     <a href="/" class="stretched-link"> </a>
   
    </Card.Body>
    
  </Card>

  <Card>
    
    <Card.Body>
    
      <Card.Img variant="top" src={ui} />
      <a href="/" class="stretched-link"> </a>
    </Card.Body>

  </Card>
  <Card>
    <Card.Body>
     
      <Card.Img variant="top" src={vanillajs}/>
      <a href="/" class="stretched-link"> </a>
    </Card.Body>
  
  </Card>
</Row>
<Row>
<Card >
  
  <Card.Body>
 
    <Card.Img variant="top" src={python}/>
   <a href="/" class="stretched-link"> </a>
  </Card.Body>
 
</Card>

<Card>
  
  <Card.Body>
  
    <Card.Img variant="top" src={datamining} />
    <a href="/" class="stretched-link"> </a>
  </Card.Body>
  
</Card>
<Card>
  <Card.Body>
   
    <Card.Img variant="top" src={thesis}/>
    <a href="/" class="stretched-link"> </a>
  </Card.Body>
  
</Card>
</Row>
</CardDeck>

        </div>
    )
}

export default Work
