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
              `https://newsapi.org/v2/everything?q=${section}&apiKey=9e30de116a7b4b63a6c21ed7eed2bc04&maxResults=10`
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
      <NewsList  articles={articles} />

      {/* <WhatHappening/>   */}
    </div>
  );
}

export {NewsBody}
