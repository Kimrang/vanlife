import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navigation.css';

export default function Navigation() {
    return (
        <div style={{backgroundColor: "#FFF7ED"}} className="Navigation">
            <div className="d-flex p-3">
                <Link className="brand" to="/">#VANLIFE</Link>
                <nav className="ms-auto p-2">
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </div>
        </div>
    );
}