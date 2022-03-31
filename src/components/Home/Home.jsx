import { NewsContainer } from '../NewsContainer/NewsContainer';
import { SideNews } from '../SideNews/SideNews';
import { LifeContent } from '../LifeContent/LifeContent';
import axios from 'axios';

export const Home = () => {

    // 31d2737533b64b4f8708946a39b6076b
    // GET https://newsapi.org/v2/top-headlines?country=us&apiKey=31d2737533b64b4f8708946a39b6076b

    const getData = ()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=31d2737533b64b4f8708946a39b6076b")
        .then(({data}) => {
            localStorage.setItem("news-articles", JSON.stringify(data.articles));

        }).catch((err) => {
            console.log(err);
        });
    }

    return <div>
        <button onClick={getData}>Click</button>
        <div className='main-div'>
            <div className='news'>
                <NewsContainer />
            </div>
            <div className='side-news'>
                <SideNews />
            </div>
        </div>

        <div className='main-div'>
            <div className='news'>
                <LifeContent />
            </div>
            <div className='side-news'>
                <SideNews />
            </div>
        </div>
        
    </div>
}