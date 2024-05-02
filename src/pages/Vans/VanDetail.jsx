import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import '../../styles/VanDetail.css';

function VanDetail() {  
    const [van, setVan] = useState(null);
    const location = useLocation()
    const params = useParams();

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data?data.vans:null))
    }, [params.id]);
    
    return (
        <main className="VanDetail">
            <Link
                to={`..${search}`}
                relative="path"
                className="ms-3"
            >                
                &larr;
                <button 
                    className="van-type-filter-btn clear-filter-btn m-0"
                >
                    {`Back to ${type} vans`}
                </button>
            </Link>
            {
                van
                ?
                (
                    <div className="p-5">
                        <img className="van-img-xl d-block" src={van.imageUrl} alt={`a ${van.name}`} />
                        <div className="vandetail-page-info mt-5">
                            <button className={`van-type-btn ${van.type}`}>{van.type.charAt(0).toUpperCase()+van.type.slice(1)}</button>
                            <p className="vandetail-page-name mt-4">{van.name}</p>
                            <p className="vandetail-page-price">${van.price}<span>/day</span></p>
                            <p className="vandetail-page-desc">{van.description}</p>
                            <button className="orange-long-btn">Rent this van</button>
                        </div>
                    </div>
                )
                :
                <h2>Loading...</h2>
            }
            
        </main>
    );
}

export default VanDetail;