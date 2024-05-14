import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="Navigation">
            <header className="d-flex p-3">
                <NavLink 
                    className="brand" 
                    to="."
                >
                    #VANLIFE
                </NavLink>
                <nav className="d-flex ms-auto p-2">
                    <NavLink 
                        to="host" 
                        className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                    >
                        Host
                    </NavLink>
                    <NavLink 
                        to="about" 
                        className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="vans" 
                        className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                    >
                        Vans
                    </NavLink>
                    <NavLink 
                        to="login" 
                        className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                    >
                        Login
                    </NavLink>
                </nav>
            </header>
        </div>
    );
}