import React, {useState, useEffect} from 'react';

import './PersonDetails';
import SwapiService from '../../services/SwapiServise';

const PersonDetails = (props: any) => {

  const [person, setPerson] = useState(null);
  const swapiService = new SwapiService;

  function updatePerson(){
    swapiService.getPerson(props.personId)
        .then((person: any)=>{
          setPerson(person);
        })
  }

  useEffect(()=>{
    updatePerson();
  }, []);

  const {id, name, gender, birthYear, eyeColor} = person;

  if (!person){
    return (
      <span>Select the Person</span>
    )
  } else {
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
