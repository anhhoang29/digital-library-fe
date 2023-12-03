import React from 'react'
import { useNavigate } from 'react-router-dom'

import './statuscard.css'

const StatusCard = props => {
    const navigate = useNavigate()

  const handleNavigate = (event) => {
      event.preventDefault(); 
      navigate(props.link); 
  };

    return (
        <a className="status-card" href={props.link} onClick={handleNavigate}>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
                <h4 className="info">{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </a>
    );
}

export default StatusCard
