import React from 'react';
import './box.css';


function Boxes(props) {
    return (
      <div className='Box'>
        <h1>{props.name}</h1>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>
      </div>
    )
  }
  export default Boxes;