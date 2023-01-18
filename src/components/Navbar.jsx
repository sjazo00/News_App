import React from 'react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <div>
        <nav className='row background-gradient'>
                <span className='text-white make col-4 mx-2 mt-2'>
                    Make MyNews your homepage
                </span>
                <span className='text-white every col-5 mx-2 mt-2'>
                    Every day discover what’s trending on the internet!
                </span>
                <button type="button" className='btn btn-light col-1 mx-1'>GET</button>
                <span className='navbar-text text-white make col-2'>
                    No, thanks
                </span>
        </nav>
    </div>
  )
}
