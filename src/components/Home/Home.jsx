import { NewsContainer } from "../NewsContainer/NewsContainer";
import { SideNews } from "../SideNews/SideNews";
import { LifeContent } from "../LifeContent/LifeContent";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  // 31d2737533b64b4f8708946a39b6076b
  // GET https://newsapi.org/v2/top-headlines?country=us&apiKey=31d2737533b64b4f8708946a39b6076b
  useEffect(()=>{
    // getData()  
    getDataLocal()
  },[])

  const[array, setArray] = useState([]);
//   console.log(array)

  function getDataLocal(){
      setArray(JSON.parse(localStorage.getItem('news-articles')))
  }
  const getData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=31d2737533b64b4f8708946a39b6076b"
      )
      .then(({ data }) => {
        localStorage.setItem("news-articles", JSON.stringify(data.articles));
        // console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div>
      <div className="main-div">
        <div className="news">
          <NewsContainer />
         
        </div>
        <div className="side-news">
          <SideNews />
        </div>
      </div>

      <div className="main-div">
        <div className="news">
          <LifeContent />
        </div>
        <div className="side-news">
          <SideNews />
        </div>
      </div>
    </div>
  );
};
