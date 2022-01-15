import React,{ useState } from "react";
import styled from "styled-components";
import  Axios from "axios";
import { useHistory } from "react-router";
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



const SecondLogin = () => {

    const location = useLocation();

    const numb = location.state.number;


    const [otp, setOtp] = useState(null);
    const [response, setResponse] = useState(null);

    const history = useHistory();
    
    const handleClick = () => {
        const Data = {
            otp: parseInt(otp),
            dial_code: "+" + 91,
            phone : numb
        }
        Axios({
            url : "https://staging.fastor.in/v1/pwa/user/login",
            method : "POST",
            headers : {'content-Type':"application/json"},
            data : Data
        }).then(
            res =>{
                setResponse(res.data.status);
                if (res.data.status == "Success") {
                    history.push("/rests", {token : res.data.data.token})
                    console.log(res.data.data.token)
                }else{
                    window.alert(res.data.error_message)
                }
            }
        ).catch(err => console.log(err))
    }
    
    return (
            <Container>
                <Wrapper>
                    <Title>ENTER YOUR OTP</Title>
                    <Form>
                        <Input placeholder="enter your otp" type="number"
                            onChange={(event) => setOtp(event.target.value)} />
                        <Button onClick={handleClick}>LOGIN</Button>
                    </Form>
                </Wrapper>
            </Container>
    )
}

export default SecondLogin;