import React, { useState, useEffect } from "react";
import '../styles/Vans.css';
import VanVertical from "../components/VanVertical";

function Vans() {
    const [vans, setVans] = useState([]);

    const vans_list = vans.map(van => {
        return (
            <VanVertical
                imageUrl={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
            />
        );
    });

    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, []);

    console.log(vans);

    return (
        <main className="Vans"> 
            <div className="vans-page-filters m-4 mt-5">
                <p className="heading">
                    Explore our van options
                </p>
                <nav className="row">
                    <button className="link-btn van-type-filter-btn col">
                        Simple
                    </button>
                    <button className="link-btn van-type-filter-btn col">
                        Luxury
                    </button>
                    <button className="link-btn van-type-filter-btn col">
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
