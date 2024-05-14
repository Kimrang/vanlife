import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";

export function loader() {
    return getHostVans()
}

function HostVans() {
    const vans = useLoaderData()

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