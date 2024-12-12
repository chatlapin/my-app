import React from 'react'
import { NavLink, Link } from "react-router";

export default function Nav() {
    return (
        <nav>
            <NavLink
                to="/">
                Home
            </NavLink>
            <NavLink
                to="/about">
                About
            </NavLink>
        </nav>
    )
}
