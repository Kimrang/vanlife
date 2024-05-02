import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="p-5 text-center">
            <p className="font-inter-700 p-5">
                Sorry, the page you were looking for was not found.
            </p>
                <Link to="/">
                    <button className="black-btn w-75">
                        Return to home
                    </button>            
                </Link>
            </div>
    );
}