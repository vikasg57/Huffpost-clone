import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import WhatHappening from './WhatHappening'
import { NewsItem } from './NewsItem'



export const NewsList = ({articles,section}) => {

    console.log(articles)
    return (
        <div>
            <div><h1 className='heading'>{section?`${section} NEWS`:"LATEST NEWS"}</h1></div>
            
            {articles.map(article => {
                return(
                  
                    < NewsItem 
                        key={article.id}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                        
                    />
                )
            })}
            
        </div>
        
    )
}

// export default NewsList
