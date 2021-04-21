import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'

const Footer = () => {
    return (
       <footer>
           <Container className="footer-container fixed bottom">
               <Row >
                   <Col className='text-center py-3'>
                       &copy; Subhasree Vadukoot | subhasreevadukoot@gmail.com
                   </Col>
                   <Col className='text-center py-3'>
                      <strong><p style={{fontFamily: "'Amatic SC', cursive"}}>Together we can build Software that matters!</p></strong>
                   </Col>
               </Row>
           </Container>
       </footer>
    )
}

export default Footer
