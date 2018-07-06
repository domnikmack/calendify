import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const header = () => (
  <div className="header" >
    <FontAwesomeIcon
    className="header-icon"
    icon={faCalendarAlt}
    />
    <h1>Calendify</h1>
    <h4>Hi&nbsp;Spot!</h4>
  </div>
);

export default header;
