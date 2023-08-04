import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Contact(){
    return(
        <>
            <h1>Contact Us</h1>
            <Link to='company'>Company</Link>
           <Outlet />
        </>
    )
}