import React, { useEffect, useState } from 'react'
import axios from "axios";
import './LatestNews.css'

const LatestNews = () => {
    const [Data, setData] = useState("")
    const [page, setPage] = useState(1)
    const fetchData = async() => {
        await axios.get(
            `https://newsapi.org/v2/everything?q=apple&from=2023-01-14&to=2023-01-14&sortBy=popularity&page=${page}&pageSize=20&apiKey=069718ab65dc4ecda239f8d69cb1088f`
        ).then((res)=> setData(prev => [...prev, ...res.data.articles]));
    };
    useEffect(() => {
        fetchData();
    }, [page])

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight)
        {
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

  return (
    <>
    <div class="col-12 col-md-3 latest-news">

        <table class="table col-5 mb-0">
            <thead>
                <tr>
                    <th className='d-flex justify-content-start' scope="col">
                        <img className='mx-2 record' src="../images/Record.png" alt="" />
                        <span>Latest news</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        {Data ? Data.map((items, index)=>
                            <>
                                <div>
                                    <p className='m-1 published'>{items.publishedAt}</p>
                                    <p className='m-1'>{items.title}</p>
                                </div>
                            </>):"LOADING..."}
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default LatestNews
