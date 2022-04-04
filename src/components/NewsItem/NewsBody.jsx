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
              `https://newsapi.org/v2/everything?q=${section}&apiKey=9e079a8795f743688dd2eaf8e5ace105&maxResults=10`
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
