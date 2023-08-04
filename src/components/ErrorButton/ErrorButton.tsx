import React, {useState, useEffect} from "react";

import './ErrorButton.css';
import ErrorIndicator from "../ErrorIndicator";

export default function ErrorButton () {
  const [renderError, setRenderError] = useState(false);

  console.log('render');

  if (renderError){
    foo.bar = 0;
  }

  return (
    <button className="error-button btn btn-danger btn-lg"
      onClick={()=> setRenderError(true)}>
        Trow Error
      </button>
  )
  }