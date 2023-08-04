import React from 'react';

const {Provider: SwapiServiceProvider,
      Consumer: SwapiServiceConsumer
    } = React.createContext('swapi');

  export {
    SwapiServiceProvider,
    SwapiServiceConsumer
  }