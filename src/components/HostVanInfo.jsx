import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const [van] = useOutletContext();

    return (
        <>
            {
                van
                ?
                <section className="font-inter-500 px-4 pb-2">
                    <p>
                        <span className="font-inter-700 fs-6">Name:</span> {van.name}
                    </p>
                    <p>
                        <span className="font-inter-700 fs-6">Category:</span> {van.type}
                    </p>
                    <p>
                        <span className="font-inter-700 fs-6">Description:</span> {van.description}
                    </p>
                    <p>
                        <span className="font-inter-700 fs-6">Visibility:</span> Public
                    </p>
                </section>
                :
                <h3>Loading...</h3>
            }
        </>
    );
}