import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../styles/Vans.css';
import VanVertical from "../../components/VanVertical";

function Vans() {
    const [vans, setVans] = useState([]);

    const vans_list = vans.map(van => {
        return (
            <Link 
                key={van.id}
                to={`/vans/${van.id}`}
                aria-label={`View details for ${van.name}, priced at ${van.price} per day`}
                className="col-6"
            >
                <VanVertical
                    imageUrl={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    type={van.type}
                />
            </Link>
        );
    });

    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, []);

    return (
        <main className="Vans"> 
            <div className="vans-page-filters m-4 mt-5">
                <p className="heading">
                    Explore our van options
                </p>
                <nav className="row">
                    <button className="van-type-filter-btn col">
                        Simple
                    </button>
                    <button className="van-type-filter-btn col">
                        Luxury
                    </button>
                    <button className="van-type-filter-btn col">
                        Rugged
                    </button>
                    <button className="van-type-filter-btn clear-filter-btn col">
                        Clear filters
                    </button>
                </nav>
            </div>
            <div className="row p-4">
                {vans_list}
            </div>
        </main>
    );
}

export default Vans;
