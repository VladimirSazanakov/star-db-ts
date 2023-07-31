import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiServise';

import './ItemList.css';
import Spinner from '../Spinner';

const ItemList = (props: any) => {

  const [peopleList, setPeopleList] = useState(null);
  const swapiService = new SwapiService;

  useEffect(() => {
    swapiService.getAllPeople()
      .then((peopleList) => {
        setPeopleList(peopleList);
        console.log(peopleList);
      })
  }, [])

  function renderItems(arr: any) {
    return arr.map((person: any, index: number) => {
      console.log(person);
      return (
        <li className='list-group-item'
          key={index}
          onClick={() => props.OnItemSelector(index)}
        >
          {person.name}
        </li>
      )
    })
  }

  if (!peopleList) {
    return <Spinner />
  } else {
    const items = renderItems(peopleList);
    console.log(items);
    return (
      <ul className='item-list list-group'>
        {items}
      </ul>
    )
  }
}


export default ItemList;
