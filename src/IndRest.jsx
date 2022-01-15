import React from 'react';
import styled from "styled-components";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
    flex : 1;
    height : 250px;
    width : 80%;
    margin : 20px 0px;
    background : url("assets/fastor.png") contain;
    border : 1px solid lightgray;
    display : flex;
`

const Wrapper = styled.div`
    display : flex;
    width : 100%;
margin : 20px 20px;
    justify-content: space-between;
`;

const Left = styled.div`
    flex : 1;
`;

const ImgContainer = styled.div`
  height : 200px;
  width :200px;
  border-radius : 10%;
`;

const Image = styled.img`
   
`;

const Right = styled.div`
     flex : 1;
`;

const Heading = styled.h1`
    font-size : 30px;
    font-weight : bold;
    color : #1b5170;
`;

const Cuisines = styled.div`
    margin : 20px 0px;
    color : lightgray;
    font-weight : bold;
`


const IndRest = ({ item }) => {
    const history = useHistory();

    const handleOn = (data) => {
        history.push("/restaurantDetails", { item: data })
    }


    return (
        <Container onClick={() => handleOn(item)}>
            <Wrapper>
                <Left>
                    <ImgContainer>
                        <Image src={`${item.images[0].url}`} alt=""
                            height={200} width={200} style={{ borderRadius: "20px" }} />
                    </ImgContainer>
                </Left>
                <Right>
                    <Heading>{item.restaurant_name}</Heading>
                    <Cuisines>
                        {item.cuisines.map((item) => {
                            return <span>{`${item.cuisine_name}, `}</span>
                        })}
                    </Cuisines>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default IndRest
