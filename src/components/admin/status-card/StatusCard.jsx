import React from 'react'

import './statuscard.css'

const StatusCard = props => {
    return (
        <a className='status-card' href={props.link}>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
                <h4 className="info">{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </a>
    )
}

export default StatusCard
