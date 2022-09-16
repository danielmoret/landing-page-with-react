import React from 'react';
import PropTypes from 'prop-types';

export function Card({title, srcImage, description, labelButton}){
    return (
        <div className="card text-center">
    <img src={srcImage} className="card-img-top" alt="..."/>
    <div className="card-body px-0">
    <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">{labelButton}</a>
    </div>
  </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    srcImage: PropTypes.string,
    description: PropTypes.string,
    labelButton: PropTypes.string
};
