import React, { useEffect, useState } from 'react';
import axios from "axios";
import './FetchData.css'
import LatestNewsMobile from './LatestNewsMobile';
import CategoriesMobile from './CategoriesMobile';

const FetchData = ({cat}) => {
    const [Data, setData] = useState([])
    const fetchData = async() => {
        await axios.get(
            cat 
            ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=069718ab65dc4ecda239f8d69cb1088f`
            : "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=069718ab65dc4ecda239f8d69cb1088f"
        ).then((res)=> setData(res.data.articles));
    };

    const [favorites, setFavorites] = useState([]);

    const handleFavoritesChange = (index,items) => {
        if(favorites.includes(index)){
            setFavorites(prevFavorite => prevFavorite.filter((fav) => fav !== index));
        } else { 
        setFavorites(prevFavorite => ([...prevFavorite, items, index]));
      }
  };

    useEffect(() => {
        fetchData();
    }, [cat])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    },[favorites])

    let isMenu = JSON.parse(localStorage.getItem('menu'))

    const [searchValue, setSearchValue] = useState([])

    let searchTitle = JSON.parse(localStorage.getItem('text'))

    useEffect(() => {
    const newArticles = Data.filter(value => value.title.toLowerCase().includes(searchTitle.toLowerCase()));
    setSearchValue(newArticles)
  }, [searchValue])

    const [isShownLatest, setIsShownLatest] = useState(false);

    const handleClick = event => {
        setIsShownLatest(true);
        setIsShownFeatured(false)

  };

  useEffect(() => {
    localStorage.setItem('latest', JSON.stringify(isShownLatest));
},[isShownLatest])

  const [isShownFeatured, setIsShownFeatured] = useState(true);

    const handleFeatured = event => {
        setIsShownLatest(false);

        {isShownLatest && (
            setIsShownFeatured(true)
            )}
  };


  

  return (
    <div className='container my-4'>
        <h3 className='news'>News</h3>
        <div className='d-flex justify-content-center'>
            <button onClick={handleFeatured} type="button" className={isShownFeatured ? 'active-button btn btn-light mx-3 featured': 'btn btn-light mx-3 featured'}>Featured</button>
            <button onClick={handleClick} className={isShownLatest ? 'active-button btn btn-light latest': 'btn btn-light latest'} type="button">Latest</button>
        </div>
        {isMenu && (
        <div>
          <CategoriesMobile/>
        </div>
        )}
        {isShownLatest && (
        <div>
          <LatestNewsMobile/>
        </div>
        )}
        {isShownFeatured && searchValue.length === 0 &&(
        <div className='container d-flex flex-wrap flex-md-row flex-column my-2'>{Data ? Data.map((items, index)=>
        <> 
            <div key={index} className='card col-md-4 col-12 m-2 p-2' style={{boxShadow: "2px 2px 10px silver"}}>
                <i onClick={() => handleFavoritesChange(index, items)} className={favorites.includes(index) ? 'active-star fas fa-star little-star' : 'fas fa-star little-star'}></i>
                <img src={items.urlToImage} alt='/' className='img-fluid'></img>
                <h5 className='m-1'>{items.title}</h5>
                <p className='m-1'>{items.author}</p>
                <a className='view-more' href={items.url} target="blank">View More</a>
            </div>
        </>):"LOADING..."}</div>
        )}
        {searchValue && isShownFeatured &&(
        <div className='container d-flex flex-wrap flex-md-row flex-column my-2'>{searchValue ? searchValue.map((items, index)=>
        <> 
            <div key={index} className='card col-md-3 col-12 m-2 p-2' style={{boxShadow: "2px 2px 10px silver"}}>
                <i onClick={() => handleFavoritesChange(index, items)} className={favorites.includes(index) ? 'active-star fas fa-star little-star' : 'fas fa-star little-star'}></i>
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

export default FetchData