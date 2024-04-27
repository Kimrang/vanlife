import React from "react";
import { NavLink } from "react-router-dom";

export default function HostLayout() {
    return (
        <header className="p-4">
            <nav>
                <NavLink 
                    to="." 
                    end
                    className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="income" 
                    className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                >
                    Income
                </NavLink>
                <NavLink 
                    to="vans" 
                    className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="reviews" 
                    className={({isActive})=> isActive ? "nav-link active" : "nav-link"}
                >
                    Reviews
                </NavLink>
            </nav>
        </header>
    );
}