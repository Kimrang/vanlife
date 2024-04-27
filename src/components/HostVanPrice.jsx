import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPrice() {
    const { van } = useOutletContext();

    return (
        <section>
            {   
                van 
                ? 
                <p className="p-3">
                    <span className="font-inter-500 fs-3 ms-3">${van.price}</span>/day
                </p>
                :
                <h3>Loading...</h3>
            }
        </section>
    );
}