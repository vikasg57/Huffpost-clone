import axios from 'axios';
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { NewsCard } from '../NewsCard/NewsCard';


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
        grid-template-columns: repeat(4,1fr);
        gap: 4%;
    `

    return <div >
        <h3 className='news-heading'>TOP STORIES</h3>

        <Container>
            {allnews.map((ele) => {
                return <NewsCard key={ele.id} data={ele} />
            })}
        </Container>
    </div>
}