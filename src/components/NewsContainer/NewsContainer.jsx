import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NewsCard } from '../NewsCard/NewsCard';
import './NewsContainer.css'


export const NewsContainer = () => {

    const [allnews, setAllnews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/topStories")
            .then(({ data }) => {
                setAllnews([...data]);
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
                return <Link to={`/entry/${ele.id}`} key={ele.id} >
                    <NewsCard data={ele} />
                </Link>
            })}
        </Container>
    </div>
}