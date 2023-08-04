import React from "react";
import {  NavLink } from "react-router-dom";
import Home from "./Home";

export default function(){
    return(
        <>
            <ul className="navbar">
                <li>
                    <NavLink className='navbar-link' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='navbar-link' to='/login'>Login</NavLink>
                </li>
                <li>
                <NavLink className='navbar-link' to='/about'>About</NavLink>
                </li>
                <li>
                <NavLink className='navbar-link' to='/users/shreyas'>Shreyas</NavLink>
                </li>
                <li>
                <NavLink className='navbar-link' to='/users/Mahak'>Mahak</NavLink>
                </li>
                <li>
                <NavLink className='navbar-link' to='/filter'>Filter</NavLink>
                </li>
                <li>
                <NavLink className='navbar-link' to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </>
    )
}