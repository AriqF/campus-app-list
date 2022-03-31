import React from 'react';
import { Button } from 'react-bootstrap';
import ringkasnet from '../../../assets/img/ringkasnet.png';

const Ringkasnet = () => {
  return (
    <div className="project-items">
        <img className="img-fluid project-img" src={ringkasnet} alt="mango-project"/>
        <h4 className='projectLink'>RingkasNet</h4>
        <div className="box-body">
            <Button href="https://github.com/AriqF/man-go" variant="custom" className="btn btn-app">Get App</Button>
        </div> 
    </div>
  )
}

export default Ringkasnet