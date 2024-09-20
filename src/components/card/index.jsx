import React from "react";

const Card = ({ title, description, imgHref }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img
          src={imgHref}
          alt={title}
        />
      </figure>
      <div className='card-body'>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;