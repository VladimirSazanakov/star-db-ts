import React from "react";

import './ErrorIndicator.css';
import icon from './DeathStar.jpg';

export default function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <img src={icon} alt="Error icon" />
      <span className="boom">Boom!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  )
}