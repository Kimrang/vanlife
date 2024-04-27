import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HostVans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/host/vans/")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, []);

    const hostvans = vans.map((van) => {
        return (
            <Link key={van.id} to={`/host/vans/${van.id}`}>     
                <div className="d-flex mt-4 bg-white p-3 rounded-2">
                    <img 
                        src={van.imageUrl}
                        className="van-img-sm"
                        alt={`a ${van.name}`}
                    />
                    <div className="ms-3 lh-1">
                        <div className="font-inter-600">{van.name}</div>
                        <div className="font-inter-500 text-faded">${van.price}/day</div>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <main className="HostVans p-4">
            <p className="font-inter-700">Your listed vans</p>
            {hostvans}
        </main>
    );
}

export default HostVans;