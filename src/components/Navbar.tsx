import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import "../styles/components/navbar.css"

function Navbar() {
    return (
        <BrowserRouter>
            <nav>
                <div>
                    <h1 className="nav-logo">CRIE.ative</h1>

                    <ul>
                        <li>
                        <Link to="" className="nav-link">Home</Link>
                            <Link to="" className="nav-link">Loren</Link>
                            <Link to="" className="nav-link">Loren</Link>

                        </li>
                    </ul>

                    <Link to="" className="nav-button">
                        ASSINE
                    </Link>
                </div>
            </nav>
        </BrowserRouter>
    )
}

export default Navbar;