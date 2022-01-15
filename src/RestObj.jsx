import React from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const Container = styled.div`
width:100vw;
height : 100vh;
background : linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),  url("assets/fastor.png")
  center;
background-size: cover;
    background-color : #f5fbfd;
`;



const Image = styled.img`
    height : 100%;
    width : 100%;
    z-index : 33;
    opacity : 0.7;
`;

const RestObj = () => {

    const location = useLocation();

    const data = location.state.item;

    return (
        <Container>
            <Image src={`${data.images[0].url}`} />
        </Container>
    )
}

export default RestObj
