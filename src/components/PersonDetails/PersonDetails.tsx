import React, {useState, useEffect} from 'react';

import './PersonDetails';

const PersonDetails = () => {
  return (
    <div className='person-details card'>
      <img className='person-image' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
      alt="character img" />
      <div className='card-body'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender</span>
            <span>{gender}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Eve color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
      PersonDetails
    </div>
  )
}
}

export default PersonDetails;
