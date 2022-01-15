import { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Container = styled.div`
width:100vw;
height : 100vh;
background : linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),  url("assets/fastor.png")
  center;
background-size: cover;
display : flex;
justify-content : center;
align-items : center;
`;

const Wrapper = styled.div`
width : 25%;
padding : 20px;
background-color : white;
`;

const Title = styled.h1`
font-size : 24px;
font-weight : 300;
`;

const Form = styled.div`
display : flex;
flex-direction : column;
`;

const Input = styled.input`
flex :1;
min-width : 50%;
margin : 10px 0px;
padding : 10px;
`;


const Button = styled.button`
width : 40%;
border : none;
padding : 15px 20px;
background-color : teal;
color : white;
cursor : pointer;
margin-bottom : 10px;
`;



const FirstLogin = () => {

    const [userName, setUsername] = useState("");
    const [phone, setPhone] = useState(null);
    const [response, setResponse] = useState(null);

    const history = useHistory();

    const handleClick = () => {
        const Data = {
            phone: parseInt(phone),
            dial_code: "+" + 91
        }
        Axios({
            url: "https://staging.fastor.in/v1/pwa/user/register",
            method: "POST",
            headers: { 'content-Type': "application/json" },
            data: Data
        }).then(
            res => {
                setResponse(res.data.status);
                if (res.data.status == "Success") {
                    history.push("/otp",{number : phone})
                }else{
                    window.alert(res.data.error_message)
                }
            }
        ).catch(err => console.log(err))
    }

    return (
        <Container>
            <Wrapper>
                <Title>LOGIN WITH YOUR PHONE NUMBER</Title>
                <Form>
                    <Input placeholder="enter your name" type="text"
                        onChange={(event) => setUsername(event.target.value)} />
                    <Input placeholder="enter your number" type="number"
                        onChange={(event) => setPhone(event.target.value)} />
                    <Button onClick={handleClick}>LOGIN</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default FirstLogin;