import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, CardDeck, Row } from "react-bootstrap";
import "./Work.scss";
import climateconvo from "./../../assets/climateconvo.png";
import shopper from "./../../assets/shopper.png";
import blissfulcell from "./../../assets/blissfulcell.png";
import postit from "./../../assets/postit.png";
import tasked from "./../../assets/tasked.png";
import dmat from "./../../assets/dmat.png";
import { useState } from "react";

export const Work = () => {
  return (
    <div>
      <CardDeck className='d-flex justify-content-center projects' fluid>
        <Row fluid className='d-flex'>
          <Card>
            <Card.Body>
              <Card.Img variant='top' src={tasked} />
              <Link to={`/projects/${"tasked"}`} className='stretched-link'>
                {" "}
              </Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Img variant='top' src={climateconvo} />
              <Link
                to={`/projects/${"climateconvo"}`}
                className='stretched-link'
              >
                {" "}
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant='top' src={postit} />
              <Link to={`/projects/${"postit"}`} className='stretched-link'>
                {" "}
              </Link>
            </Card.Body>
          </Card>
        </Row>
        <Row fluid className='d-flex'>
          <Card>
            <Card.Body>
              <Card.Img variant='top' src={blissfulcell} />
              <Link
                to={`/projects/${"blissfulcell"}`}
                className='stretched-link'
              >
                {" "}
              </Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Img variant='top' src={shopper} />
              <Link to={`/projects/${"shopper"}`} className='stretched-link'>
                {" "}
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant='top' src={dmat} />
              <Link to={`/projects/${"dmat"}`} className='stretched-link'>
                {" "}
              </Link>
            </Card.Body>
          </Card>
        </Row>
      </CardDeck>
    </div>
  );
};
