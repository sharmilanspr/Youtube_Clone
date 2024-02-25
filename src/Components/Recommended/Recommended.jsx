import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, value_convertor } from '../../data'
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {

    const [apiData,setApiData]=useState([]);

    const fetchData= async () =>{

        const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=100&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
        return(
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <span>{value_convertor(item.statistics.viewCount)}Views</span>
            </div>
        </Link>

            )
        })}

    </div>
  )
}

export default Recommended