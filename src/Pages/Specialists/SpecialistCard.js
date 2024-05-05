import React from 'react';
import TextCollapse from './TextCollapse';
import "./style.css"

const SpecialistCard = ({ specialist, expanded, onExpand }) => {
  return (
    <div
      className={`specialist-card ${expanded? 'expanded' : ''}`}
      key={specialist.id}
    >
      <div className="specialist-image-container">
        <img src={specialist.image} alt={specialist.name} />
      </div>
      <div className="specialist-info-container">
        <p className="specialist-name">{specialist.name}</p>
        <TextCollapse text={specialist.description} expanded={expanded} onExpand={onExpand} />
        <button onClick={() => window.location.href = specialist.tg} className="tg-group-schedule-button">
          <p className="modal_button-txt">Написать специалисту</p>
        </button>
      </div>
    </div>
  );
};

export default SpecialistCard;