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
              `https://newsapi.org/v2/everything?q=${section}&apiKey=191b032ad094489cbbc31195d0e1ab3f&maxResults=10`
            );

          //  const article= JSON.parse(localStorage.getItem("news"))
            setArticles(response.data.articles)
            // setArticles(article)
            // console.log(response)
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
