import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import "../styles/components/navbar.css"

function Navbar() {
    return (
        <nav>
            <div>
                <h1 className="nav-logo">CRIE.ative</h1>

                <ul>
                    <li>
                        <NavLink to="/" exact={true} activeClassName="is-active" className="nav-link">início</NavLink>
                        <NavLink to="/referencias" activeClassName="is-active" className="nav-link">Referencie-se</NavLink>
                        <NavLink to="/futuro" activeClassName="is-active" className="nav-link">o Futuro</NavLink>
                    </li>
                </ul>

                <Link to="" className="nav-button">
                    ASSINE
                    </Link>
            </div>
        </nav>
    )
}

export default Navbar;