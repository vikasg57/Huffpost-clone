// import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewsList } from './NewsList'



function NewsBody() {

  const {section}=useParams()

  console.log(section)

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(
              // `https://newsapi.org/v2/everything?q=${section}&apiKey=7de696f5d3d5460ab406bf8f861d9a52&maxResults=10`
              `https://api.currentsapi.services/v1/search?keywords=${section}&language=en&page_size=10&apiKey=IJt6TvU_ZHI05_joE0kUd5lXou_KXO6g0TY25_iTXCaO1Evf`
            );

        

           setArticles([...response.data.news]);

          //   localStorage.setItem("news", JSON.stringify(response.data.news));

          //  const article= JSON.parse(localStorage.getItem("news"))
      
          //   setArticles(article)
          //   console.log(response)
        }

        getArticles()
    }, [section])
  
  return (
    <div className="App">
       <NewsList section={section}  articles={articles} /> 

      {/* <WhatHappening/>   */}
    </div>
  );
}

export {NewsBody}
