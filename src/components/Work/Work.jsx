import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import { Tabs, Tab, ListGroup, Card, CardDeck, Nav, Button, Form, FormControl, Container, Row, Col, CardColumns } from 'react-bootstrap'
import './Work.scss'
import climateconvo from './../../assets/climateconvo.png';
import shopper from './../../assets/shopper.png';
import blissfulcell from './../../assets/blissfulcell.png';
import postit from './../../assets/postit.png';
import tasked from './../../assets/tasked.png';
import dmat from './../../assets/dmat.png';
import { useState } from 'react'
import Overlay from 'react-bootstrap/Overlay'

import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';

export const Work = () => {
  const [key, setKey] = useState('all');
  
  return (
    <div>
      <Tabs style={{color:'black'}}
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        defaultActiveKey="all" transition={false}
        className='tabs-projects'>
        <Tab eventKey="all" title="All">
          <CardProjects projectType={key} />
        </Tab>
        <Tab eventKey="python" title="Python">
          <CardProjects projectType={key} />
        </Tab>
        <Tab eventKey="react" title="React" >
          <CardProjects projectType={key} />
        </Tab>
        <Tab eventKey="js" title="JavaScript" >
          <CardProjects projectType={key} />
        </Tab>
        <Tab eventKey="dmat" title="Data Mining" >
          <CardProjects projectType={key} />
        </Tab>
      </Tabs>
    </div>
  )
}



export const CardProjects = ({ projectType,history }) => {
  const [id, setId] = useState('postIt');
  console.log(projectType)
  if (projectType === 'all') {
    console.log('alltrue')
    return (
      <div>

        <CardDeck className="d-flex justify-content-center projects">
          <Row>
            <Card >
              <Card.Body>
                 <Card.Img variant="top" src={postit} />
                <Link to={`/projects/${'postIt'}`} 
                className="stretched-link"> </Link>
              </Card.Body>
            </Card>

            <Card>

              <Card.Body>

                <Card.Img variant="top" src={shopper} />
                <Link to={`/projects/${'shopper'}`} 
                className="stretched-link"> </Link> 
              </Card.Body>

            </Card>
            <Card>
              <Card.Body>

                <Card.Img variant="top" src={tasked} />
                <Link to="/projects" className="stretched-link"> </Link>
              </Card.Body>

            </Card>
          </Row>
          <Row>
            <Card >

              <Card.Body>

                <Card.Img variant="top" src={blissfulcell} />
                <Link t0="/" className="stretched-link"> </Link>
              </Card.Body>

            </Card>

            <Card>

              <Card.Body>

                <Card.Img variant="top" src={climateconvo} />
                <a href="/" className="stretched-link"> </a>
              </Card.Body>

            </Card>
            <Card>
              <Card.Body>

                <Card.Img variant="top" src={dmat} />
                <a href="/" className="stretched-link"> </a>
              </Card.Body>

            </Card>
          </Row>
        </CardDeck>
      </div>
    )
  }

  else if (projectType === 'python') {
    return (
      <div>

        <CardDeck className="d-flex justify-content-center projects">
          <Row>

            <Card >

              <Card.Body>

                <Card.Img variant="top" src={postit} />
                <a href="/projects" className="stretched-link"> </a>

              </Card.Body>

            </Card>


            <Card>
              <Card.Body>

                <Card.Img variant="top" src={tasked} />
                <a href="/" className="stretched-link"> </a>
              </Card.Body>

            </Card>
          </Row>
          <Row>


            <Card>

              <Card.Body>

                <Card.Img variant="top" src={climateconvo} />
                <a href="/" className="stretched-link"> </a>
              </Card.Body>

            </Card>

          </Row>
        </CardDeck>
      </div>



    )
  }
  else if (projectType === 'react') {
    return (
      <div>

        <CardDeck className="d-flex justify-content-center projects">
          <Row>

            <Card >

              <Card.Body>

                <Card.Img variant="top" src={shopper} />
                <a href="/projects" className="stretched-link"> </a>

              </Card.Body>

            </Card>



          </Row>
        </CardDeck>
      </div>
    )
  }
  else if (projectType === 'js') {
    return (
      <div>

        <CardDeck className="d-flex justify-content-center projects">
          <Row>

            <Card >

              <Card.Body>

                <Card.Img variant="top" src={blissfulcell} />
                <a href="/projects" className="stretched-link"> </a>

              </Card.Body>

            </Card>



          </Row>
        </CardDeck>
      </div>



    )
  }
  else if (projectType === 'dmat') {
    return (
      <div>

        <CardDeck className="d-flex justify-content-center projects">
          <Row>

            <Card >

              <Card.Body>

                <Card.Img variant="top" src={dmat} />
                <a href="/projects" className="stretched-link"> </a>

              </Card.Body>

            </Card>

          </Row>
        </CardDeck>
      </div>

    )
  }
}