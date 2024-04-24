import React from "react";
import { NavLink } from "react-router-dom";

export default function HostLayout() {
    return (
        <header className="p-4">
            <nav className="">
                <NavLink 
                    to="/host" 
                    end
                    className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/host/income" 
                    className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                >
                    Income
                </NavLink>
                <NavLink 
                    to="/vans" 
                    className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="/host/reviews" 
                    className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                >
                    Reviews
                </NavLink>
            </nav>
        </header>
    );
}