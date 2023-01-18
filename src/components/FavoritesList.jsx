import React, { useEffect, useState } from 'react'

const FavoritesList = () => {

  let favorites = JSON.parse(localStorage.getItem('favorites'))

  var favoritesWithoutIndex = favorites.filter(fav => {
    if ( !isNaN(fav)) {
      return false; 
    }
    return true;
  });

  const [searchValueFavorites, setSearchValueFavorites] = useState([])

    let searchTitle = JSON.parse(localStorage.getItem('text'))

    useEffect(() => {
    const newArticles = favoritesWithoutIndex.filter(value => value.title.toLowerCase().includes(searchTitle.toLowerCase()));
    setSearchValueFavorites(newArticles)
  }, [searchValueFavorites])

  return (
    <div className='container my-4'>
      {searchValueFavorites.length === 0 && (
     <div className='container d-flex flex-wrap flex-md-row flex-column my-2'>{favoritesWithoutIndex ? favoritesWithoutIndex.map((items, index)=>
        <>
            <div key={index} className='card col-md-3 col-12 m-2 p-2' style={{boxShadow: "2px 2px 10px silver"}}>
                <img src={items.urlToImage} alt='/' className='img-fluid'></img>
                <h5 className='m-1'>{items.title}</h5>
                <p className='m-1'>{items.author}</p>
                <a className='view-more' href={items.url} target="blank">View More</a>
            </div>
        </>):"LOADING..."}</div>
        )}
        {searchValueFavorites.length !== 0 && (
        <div className='container d-flex flex-wrap flex-md-row flex-column my-2'>{searchValueFavorites ? searchValueFavorites.map((items, index)=>
        <> 
            <div key={index} className='card col-md-3 col-12 m-2 p-2' style={{boxShadow: "2px 2px 10px silver"}}>
                <img src={items.urlToImage} alt='/' className='img-fluid'></img>
                <h5 className='m-1'>{items.title}</h5>
                <p className='m-1'>{items.author}</p>
                <a className='view-more' href={items.url} target="blank">View More</a>
            </div>
        </>):"LOADING..."}</div>
        )}
    </div>
        
  )
}

export default FavoritesList