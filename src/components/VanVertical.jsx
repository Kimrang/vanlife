import React from "react";
import '../styles/VanVertical.css';

export default function VanVertical({ imageUrl, name, price, type }) {
    let type_title;

    if(type === 'simple')
        type_title = 'Simple';
    else if(type === 'rugged')
        type_title = 'Rugged';
    else
        type_title = 'Luxury'

    return (
        <div className="VanVertical text-center mb-5">
            <img className="van-img-lg" src={imageUrl} alt={`a ${name}`} />
            <div className="d-flex mt-2">
                <span className="van-name ms-3 w-50">{name}</span>
                <span className="ms-5">
                    <div>
                        <span className="van-price">${price}</span>
                        <br />/day
                    </div>
                </span>
            </div>
            <div className="text-start">
                <button className={`van-type-btn ${type} ms-3`}>
                    {type_title}
                </button>
            </div>
        </div>
    );
}