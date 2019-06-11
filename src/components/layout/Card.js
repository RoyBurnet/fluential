import React from 'react';
import cardImage from '../../flyforrest.jpeg';

const Card = ({ title, subtitle }) => {
  return (
    <div className="card">
      <img src={cardImage} alt="" />
      <div className="applied">Applied</div>
      <div className="info">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="subtitle">
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
