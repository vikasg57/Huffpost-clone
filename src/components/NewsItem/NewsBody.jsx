// import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NewsList } from './NewsList'


function NewsBody() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9e30de116a7b4b63a6c21ed7eed2bc04&maxResults=10` )
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
  
  return (
    <div className="App">
      <NewsList  articles={articles} />

      {/* <WhatHappening/>   */}
    </div>
  );
}

export {NewsBody}
