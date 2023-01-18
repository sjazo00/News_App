import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
import './Search.css';

export const Search = () => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleMenu = event => {
        setIsMenuClicked(true);
        
        {isMenuClicked && (
            setIsMenuClicked(false)
            )}

    };

    useEffect(() => {
        localStorage.setItem('menu', JSON.stringify(isMenuClicked));
    },[isMenuClicked])

    useEffect(() => {
        localStorage.setItem('text', JSON.stringify(text));
    },[text])

    const className = classNames({
        'fas fa-ban ban-icon col-1': isMenuClicked,
        'fas fa-bars burger-bar col-1': !isMenuClicked
      });

  return (
    <>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <img className='mx-3 col-3 col-md-1' src="../images/MyNews.png" alt="" />
            <form className='col-6 col-md-8' onSubmit={handleSubmit}>
                <input 
                    className="py-1 px-2 mx-1 input-search col-md-5" 
                    type="text" 
                    placeholder="Search news" 
                    onChange={(e) => setText(e.target.value)}/>
                <button className="btn btn-danger py-1 px-2 search-button" type="submit">Search</button>
            </form>
            <i onClick={handleMenu} className={className}></i>
        </nav>
    </>
  )
}
