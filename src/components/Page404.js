import React from "react";
import { Link } from "react-router-dom";

export default function Page404(){
    return(
        <>
            <h1>404 Error</h1>
            <p>Page not found</p>
            <Link to='/'>Get back to Home page</Link>
        </>
    )
}