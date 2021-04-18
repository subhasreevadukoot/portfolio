import React,{useState} from 'react'

import {projectDetails} from '../ProjectCarousel/projectConstants'

const ProjectCarousel = ({match}) => {
console.log(match.params.id)
return (
 
 <div>
<div className="card mb-3">
  <h3 className="card-header">{projectDetails[match.params.id]['name']}</h3>
  <div className="card-body">
    <h5 className="card-title">{projectDetails.postIt.titleText}</h5>
    <h6 className="card-subtitle text-muted">{projectDetails.postIt.subTitleText}</h6>
 <p></p>
<div className='imagecard'><img className="img-fluid" src={projectDetails[match.params.id]['projectImage']} alt='task management'/></div>
</div>
  <div className="card-body">
    <p className="card-text">
   <h3> Motivation</h3>
<p>{projectDetails[match.params.id]['motivationText']}</p>
<h3>Description</h3>
<p>{projectDetails[match.params.id]['descriptionText']}
</p></p>
  </div>
  <div className="card-body">
  <h3>Technology Stack</h3>
  <ul className="list-group list-group-flush"> 
    <li className="list-group-item">Python</li>
    <li className="list-group-item">Django</li>
    <li className="list-group-item">Google App Engine</li>
    <li className="list-group-item">HTML, CSS, BootStrap</li>
  </ul>
  </div>
  <div className='card-body'>
  <div className="card-text">
  <h3>Design Decisions</h3>
<p>{projectDetails[match.params.id]['designDecisions']} </p>
  </div>
  </div>
  <div className="card-body">
    <a href="#" className="card-link">
    <button type="button" class="btn btn-light">Source Code</button></a>
    <a href="#" className="card-link">
    <button type="button" class="btn btn-dark">Live Preview</button></a>
  </div>
  <div className="card-footer text-muted">
   
  </div>
</div>

        </div>
    )
}







export default ProjectCarousel
