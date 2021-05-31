import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../navbar.css';

const Navbar = () => {
    return (
        <section className="navbar-comp">
            <div>The Navbar</div>
            <div className="link-wrapper">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/resources">Resources</NavLink>
            </div>
        </section>
    )
}

export default Navbar;