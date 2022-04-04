import axios from "axios";
import { useEffect, useState } from "react"



export const SideNews = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
          .get(
            "https://newsapi.org/v2/everything?q=ukraine&apiKey=191b032ad094489cbbc31195d0e1ab3f"
          )
          .then(({ data }) => {
            setNews([...data.articles]);
          })
          .catch((err) => {
            console.log(err);
          });
    }, [])

    return <div className="side-news">
        <h4 className="news-heading">UKRAINE CRISIS</h4>

        <div>
            {
                news.map((ele) => {
                    return <h3 key={String(Math.random() * 10)}>{ele.title}</h3>
                })
            }
        </div>

    </div>
}