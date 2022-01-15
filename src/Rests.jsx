import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styled from 'styled-components';
import IRI from "./IndRest"

const Container = styled.div`
    padding : 20px;
    display : flex;
    flex-direction : column;
    align-items : center;
`

const Heading = styled.h1``;

const Rests = () => {

    const location = useLocation();
    const token = location.state.token;

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const makeReq = async () => {
            try {
                const response = await axios({
                    url: "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
                    method: "GET",
                    headers: { Authorization: `Bearer ${token}` }
                })

                setRestaurants(response.data)
            } catch (err) { }
        }
        token && makeReq()
    }, [token])

    console.log(restaurants)

    return (
        <Container>

            <Heading>Popular Ones</Heading>

            {
                restaurants && restaurants.map((item) => (
                    <IRI key={item.restaurant_id} item={item} />
                ))
            }
        </Container>
    )
}

export default Rests
