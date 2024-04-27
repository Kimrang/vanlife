import React, { useState, useEffect} from "react";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";

function HostVanDetail() {
    const { id } = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans[0]));
    }, [id]);
    
    return (
        <main className="HostVanDetail p-4">
            <Link
                to=".."
                relative="path"
                className=""
            >                
                &larr;
                <button 
                    className="van-type-filter-btn clear-filter-btn m-0"
                >
                    Back to all vans
                </button>
            </Link>
            <div className="bg-white rounded-2">
                {
                    van
                    ?
                    (
                        <>
                            <div className="p-4 mt-3">
                                <div className="d-flex">
                                    <img 
                                        src={van.imageUrl}
                                        className="van-img-md"
                                        alt={`a ${van.name}`}
                                    />
                                    <div className="p-3">
                                        <button className={`van-type-btn ${van.type}`}>
                                            {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                                        </button>
                                        <div
                                            style={{'fontSize': '26px'}} 
                                            className="font-inter-700 mt-3"
                                        >
                                                {van.name}
                                        </div>
                                        <div 
                                            style={{'font-size': '19px'}} 
                                            className="font-inter-700"
                                        >
                                            ${van.price}
                                            <span className="font-inter-500">/day</span>
                                        </div>
                                    </div>
                                </div>
                                <nav className="mt-3">
                                    <NavLink 
                                        to="." 
                                        end
                                        className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                                    >
                                        Details
                                    </NavLink>
                                    <NavLink 
                                        to="pricing" 
                                        className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                                    >
                                        Pricing
                                    </NavLink>
                                    <NavLink 
                                        to="photos" 
                                        className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                                    >
                                        Photos
                                    </NavLink>
                                </nav>
                            </div>
                            <Outlet 
                                context={{ van }} 
                            />
                        </>
                    )   
                    :
                    <p className="font-inter-600">Loading...</p>
                }
            </div>
        </main>
    );
}

export default HostVanDetail;