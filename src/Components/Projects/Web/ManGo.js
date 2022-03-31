import React from 'react';
import imgMango from '../../../assets/img/mango.png';
import { Button } from 'react-bootstrap';


const ManGo = () => {
  return (
    <div className="project-items">
        <img className="img-fluid project-img" src={imgMango} alt="mango-project"/>
        <h4 className='projectLink'>ManGo</h4>
        <div className="box-body">
            <Button href="https://github.com/AriqF/man-go" variant="custom" className="btn btn-app">Go To App</Button>
        </div> 
    </div>
  )
}

export default ManGo