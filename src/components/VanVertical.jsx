import React from "react";
import '../styles/VanVertical.css';

export default function VanVertical({ imageUrl, name, price, type }) {
    return (
        <div className="VanVertical text-center mb-5 col-6">
            <img className="van-img" src={imageUrl} alt="van" />
            <div className="row mt-2">
                <span className="van-name ms-3 col-8">{name}</span>
                <span className="col">
                    <div className="lh-1">
                        <span className="van-price">${price}</span>
                        <br />/day
                    </div>
                </span>
            </div>
            <div className="text-start">
                <button className={`van-type-btn ${type} ms-3`}>
                    {type}
                </button>
            </div>
        </div>
    );
}