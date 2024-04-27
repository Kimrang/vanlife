import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const { van } = useOutletContext();

    return (
        <section className="p-3">
            {
                van 
                ?
                <img 
                    src={van.imageUrl}
                    className="van-img-xl ms-2"
                    alt={`a ${van.name}`}
                />
                :
                <h3>Loading...</h3>
            }
        </section>
    );
}