import React from 'react'
import './newsItem.css'
// import WhatHappening from './WhatHappening'

export const NewsItem = ({ title, description, url, urlToImage ,author }) => {
    return (
        
      
            
            <div className='main'>
            <div className='news-logo'>
                <img className='news-img' src={urlToImage} alt={urlToImage} />

                </div>
                
                <div className="desc">
                <h3><a href={url}>{title}</a></h3>
                
                <p>{description}</p>
                <p>{author}</p>
              
            </div>
            </div>
  
        
    )
}

// export default NewsItem
