import React from "react";
import { Outlet } from "react-router-dom";
import HostNavigation from "./HostNavigation";

export default function HostLayout() {
    return (
        <>
            <HostNavigation />
            <Outlet />
        </>
    );
}