import React, { useState } from "react";
import "./ProjectCarousel.scss";
import { projectDetails } from "../ProjectCarousel/projectConstants";
import { Carousel } from "react-bootstrap";
const ProjectCarousel = ({ match }) => {
  console.log(match.params.id);
  return (
    <div>
      <div className='card mb-3'>
        <h3 className='card-header'>
          {projectDetails[match.params.id]["name"]}
        </h3>
        <div className='card-body'>
          <h5 className='card-title'>
            {projectDetails[match.params.id]["titleText"]}
          </h5>
          <h6 className='card-subtitle text-muted'>
            {projectDetails[match.params.id]["subTitleText"]}
          </h6>
          <p></p>
          <div className='imagecard'>
            <Carousel className='project-carousel'>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={projectDetails[match.params.id]["projectImage"][0]}
                  alt='First slide'
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={projectDetails[match.params.id]["projectImage"][1]}
                  alt='Second slide'
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={projectDetails[match.params.id]["projectImage"][2]}
                  alt='Third slide'
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className='card-body'>
          <p className='card-text'>
            <h3> Motivation</h3>
            <p style={{ textAlign: "justify" }}>
              {projectDetails[match.params.id]["motivationText"]}
            </p>
            <h3>Description</h3>
            <p style={{ textAlign: "justify" }}>
              {projectDetails[match.params.id]["descriptionText"]}
            </p>
          </p>
        </div>
        <div className='card-body'>
          <h3>Technology Stack</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              {projectDetails[match.params.id]["techStack"][0]}
            </li>
            <li className='list-group-item'>
              {projectDetails[match.params.id]["techStack"][1]}
            </li>
            <li className='list-group-item'>
              {projectDetails[match.params.id]["techStack"][2]}
            </li>
            <li className='list-group-item'>
              {projectDetails[match.params.id]["techStack"][3]}
            </li>
            <li className='list-group-item'>
              {projectDetails[match.params.id]["techStack"][4]}
            </li>
          </ul>
        </div>
        <div className='card-body'>
          <div className='card-text'>
            {match.params.id === "shopper" ||
            match.params.id === "climateconvo" ||
            match.params.id === "blissfulcell" ||
            match.params.id === "dmat" ? (
              <h3>Features</h3>
            ) : (
              <h3>Design Decisions</h3>
            )}

            {match.params.id === "shopper" ||
            match.params.id === "blissfulcell" ||
            match.params.id === "dmat" ? (
              <p style={{ textAlign: "justify" }}>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    {projectDetails[match.params.id]["designDecisions"][0]}
                  </li>
                  <li className='list-group-item'>
                    {projectDetails[match.params.id]["designDecisions"][1]}
                  </li>
                  <li className='list-group-item'>
                    {projectDetails[match.params.id]["designDecisions"][2]}
                  </li>
                  <li className='list-group-item'>
                    {projectDetails[match.params.id]["designDecisions"][3]}
                  </li>
                  <li className='list-group-item'>
                    {projectDetails[match.params.id]["designDecisions"][4]}
                  </li>
                </ul>
              </p>
            ) : (
              <p style={{ textAlign: "justify" }}>
                <p>{projectDetails[match.params.id]["designDecisions"]} </p>
              </p>
            )}
          </div>
          {match.params.id === "climateconvo" && (
            <div>
              <h3>Research Objectives</h3>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  {projectDetails[match.params.id]["researchObjective"][0]}
                </li>
                <li className='list-group-item'>
                  {projectDetails[match.params.id]["researchObjective"][1]}
                </li>
              </ul>{" "}
            </div>
          )}
        </div>

        <div className='card-body'>
          <a
            href={projectDetails[match.params.id]["sourceLink"]}
            target='_blank'
            rel='noreferer'
            className='card-link'
            alt='Source code'
          >
            {match.params.id !== "shopper" && (
              <button type='button' class='btn btn-dark'>
                Source Code / Documentation
              </button>
            )}
          </a>
        </div>
        <div className='card-footer text-muted'></div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
