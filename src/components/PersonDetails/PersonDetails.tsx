import React, {useState, useEffect} from 'react';

import './PersonDetails.css';
import SwapiService from '../../services/SwapiServise';
import Spinner from '../Spinner';

const PersonDetails = (props: any) => {


  const [person, setPerson] = useState({id: 0, name: '', gender: '', birthYear: '', eyeColor: ''});
  const [updateProcess, setUpdateProcess] = useState(false);

  const swapiService = new SwapiService;

  function updatePerson(){
    const personId = props.personId + 1;
    if(!personId){
      return;
    }
    swapiService.getPerson(personId)
        .then((person: any)=>{
          setPerson(person);
          setUpdateProcess(false);
        })
  }

  useEffect(()=>{
    setUpdateProcess(true);
    updatePerson();
  }, [props]);

  const {id, name, gender, birthYear, eyeColor} = person;

  if (updateProcess){
    return (
      <Spinner />
    )
  } else {
  return (
    <div className='person-details card'>
      <img className='person-image' src={`https://starwars-visualguide.com/assets/img/characters/${props.personId+1}.jpg`} 
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
