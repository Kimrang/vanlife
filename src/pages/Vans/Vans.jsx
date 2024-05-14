import React from "react";
import { useLoaderData, Link, useSearchParams } from "react-router-dom";
import '../../styles/Vans.css';
import VanVertical from "../../components/VanVertical";
import { getVans } from "../../api";

export function loader() {
    return getVans()
}

function Vans() {
    const vans = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams();
    let typeFilter = searchParams.get("type");

    const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans

    const vans_list = displayedVans.map(van => {
        return (
            <Link 
                key={van.id}
                to={van.id}
                state={{ "search": `?${searchParams.toString()}`, "type": typeFilter}}
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

    return (
        <main className="Vans"> 
            <div className="vans-page-filters m-4 mt-5">
                <p className="heading">
                    Explore our van options
                </p>
                <nav className="row">
                    <button 
                        onClick={() => setSearchParams({"type": "simple"})}
                        className={`van-type-filter-btn selected-${typeFilter==="simple"?typeFilter:""} col`}
                    >
                        Simple
                    </button>
                    <button 
                        onClick={() => setSearchParams({"type": "luxury"})}
                        className={`van-type-filter-btn selected-${typeFilter==="luxury"?typeFilter:""} col`}
                    >
                        Luxury
                    </button>
                    <button 
                        onClick={() => setSearchParams({"type": "rugged"})}
                        className={`van-type-filter-btn selected-${typeFilter==="rugged"?typeFilter:""} col`}
                    >
                        Rugged
                    </button>
                    {
                        typeFilter
                        ?
                        <button 
                            onClick={() => setSearchParams({})}
                            className="van-type-filter-btn clear-filter-btn col"
                        >
                            Clear filters
                        </button>
                        :
                        null
                    }   
                </nav>
            </div>
            <div className="row p-4">
                {vans_list}
            </div>
        </main>
    );
}

export default Vans;
