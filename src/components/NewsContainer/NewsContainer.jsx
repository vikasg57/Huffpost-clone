import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NewsCard } from '../NewsCard/NewsCard';
import './NewsContainer.css'


export const NewsContainer = () => {

    const [allnews, setAllnews] = useState([]);


    useEffect(() => {
        axios.get("https://api.currentsapi.services/v1/latest-news?language=en&apiKey=IJt6TvU_ZHI05_joE0kUd5lXou_KXO6g0TY25_iTXCaO1Evf")
            .then(({ data }) => {
                setAllnews([...data.news]);
            
                console.log("news",data.news);
            });
    }, []);

    const Container = styled.div`
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(4,23%);
    `

    return <div className='news'>
        <h3 className='news-heading'>TOP STORIES</h3>

       

        <Container>
            {[...allnews.filter(({ image }) => {
                return image != "None"
            })].map((ele) => {
                return <Link to={`/entry/${ele.id}`} state={{ data: {ele} }} key={ele.id} >
                    <NewsCard data={ele} />
                </Link>
            })}
        </Container>
    </div>
}