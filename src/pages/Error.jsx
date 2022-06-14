import React from 'react'
import styled from 'styled-components';
import ErrorImage from '../images/404.png';
import { useNavigate } from 'react-router-dom';

const LinearGradient = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, rgba(223, 217, 239, 1) 0%, rgba(222, 226, 241, 1) 100%); 
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const ImgError = styled.img`
    width: 40%;

    @media screen and (max-width: 1600px){
        width: 30%;
    }
    @media screen and (max-width: 1440px){
        width: 30%;
    }

    @media screen and (max-width: 1180px){
        width: 50%;
    }
`;
const TextError = styled.h1`
    font-weight: bold;
    font-size: 72px;
    color: #333333;
    text-align: center;
`;
const SubTextError = styled.p`
    font-weight: 300;
    font-size: 36px;
    color: #333333;
    text-align: center;

    @media screen and (max-width: 1600px){
        font-size: 30px;
    }
    @media screen and (max-width: 1440px){
        font-size: 30px;
    }

    @media screen and (max-width: 1180px){
        font-size: 20px;
    }
`;
const BtnError = styled.button`
    border-radius: 10px;
    background: #674CC4;
    padding: 15px 60px;
    color: #fff;
    font-weight: 300;
    font-size: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease;
        background: #816bc9;
        color: #fff;
    }
`;

const Error = () => {
    
    let navigate = useNavigate();
    
    return (
        <>
            <LinearGradient>
                <ImgError src={ErrorImage}  alt="Error 404" title="Error 404"/>
                <TextError>Uuups...</TextError>
                <SubTextError>No se encontro la página</SubTextError>
                <BtnError onClick={() => { navigate("/")}}>Regresar</BtnError>
            </LinearGradient>
        </>
    );
};

export default Error;