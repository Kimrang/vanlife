import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";

function HostVans() {
    const [vans, setVans] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadHostVans() {
            try {
                const vans = await getHostVans()
                setVans(vans)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadHostVans()
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

    if(loading) {
        return (
            <h1 className="ms-3">Loading...</h1>
        )
    }

    if(error) {
        return (
            <h1 className="ms-3">Error: {error}</h1>
        )
    }

    return (
        <main className="HostVans p-4">
            <p className="font-inter-700">Your listed vans</p>
            {hostvans}
        </main>
    );
}

export default HostVans;