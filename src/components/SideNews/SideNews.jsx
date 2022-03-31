import axios from "axios";
import { useEffect, useState } from "react"



export const SideNews = ()=>{

    const [news, setNews] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/sideNews")
        .then(({data}) => {
            setNews([...data]);
        }).catch((err) => {
            console.log(err);
        });
    },[])
    
    return <div>
        <h4 className="news-heading">UKRAINE CRISIS</h4>

        <div>
            {
                news.map((ele)=>{
                    return <h3 key={ele.id}>{ele.title}</h3>
                })
            }
        </div>

    </div>
}