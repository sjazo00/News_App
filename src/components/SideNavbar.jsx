import React from 'react'
import { Link, useLocation } from "react-router-dom";
import './SideNavbar.css';

export const SideNavbar = () => {
    const {pathname} = useLocation();
  return (
    <>
        <nav className="side-bar col-1">
            <ul>
                <li>
                    <Link className={(pathname === '/') ? 'active' : ''} to="/">
                        <i className="fas fa-home"></i>
                        <span className="nav-item">Home</span>
                    </Link>
                </li>
                <li><Link className={(pathname === '/general') ? 'active' : ''} to="/general">
                        <i className="fas fa-newspaper"></i>
                        <span className="nav-item">General</span>
                    </Link></li>
                <li><Link className={(pathname === '/business') ? 'active' : ''} to="/business">
                        <i className="fas fa-business-time"></i>
                        <span className="nav-item">Business</span>
                    </Link></li>
                <li><Link className={(pathname === '/health') ? 'active' : ''} to="/health">
                        <i className="fas fa-notes-medical"></i>
                        <span className="nav-item">Health</span>
                    </Link></li>
                <li><Link className={(pathname === '/science') ? 'active' : ''} to="/science">
                        <i className="fas fa-flask"></i>
                        <span className="nav-item">Science</span>
                    </Link></li>
                <li><Link className={(pathname === '/sports') ? 'active' : ''} to="/sports">
                        <i className="fas fa-futbol"></i>
                        <span className="nav-item">Sports</span>
                    </Link></li>
                <li><Link className={(pathname === '/technology') ? 'active' : ''} to="/technology">
                        <i className="fas fa-microchip"></i>
                        <span className="nav-item">Technology</span>
                    </Link></li>
                <li><Link className={(pathname === '/favorites') ? 'active' : ''} to="/favorites">
                        <i className="fas fa-star"></i>
                        <span className="nav-item">Favorites</span>
                    </Link></li>
            </ul>
        </nav>
    </>
  )
}
