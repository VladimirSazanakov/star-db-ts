import React, {useState, useEffect} from "react";

import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

import './PeoplePage.css';
import ErrorIndicator from "../ErrorIndicator";
import ErrorButton from "../ErrorButton";

export default function PeoplePage (){

  const [selectedPerson, setSelectedPerson] = useState(0);
  const [error, setError] = useState(false);
  
  function onPersonSelected(id: number) {
    setSelectedPerson(id);
    console.log(id);
  }

  try {
    if(!error){
  return (
    <div className='row md2'>
        <div className='col-md-6'>
          <ItemList OnItemSelector={onPersonSelected} />
        </div>
        <div className='col-md-6'>
          <PersonDetails personId={selectedPerson} />
          <ErrorButton />
        </div>
      </div>
  )} else {
    return (
      <ErrorIndicator />
    )
  }
  }catch(error){
    setError(true);
    return (
      <ErrorIndicator />
    )
  }
}