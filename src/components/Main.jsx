import React from 'react';
import styled from 'styled-components';
import parking from '../images/PARKING.png';

const LinearGradient = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background: linear-gradient(180deg, rgba(223, 217, 239, 1) 0%, rgba(222, 226, 241, 1) 100%);
    overflow-y: hidden; 

    @media screen and (max-width: 1180px){
        height: calc(100vh + 70px);
    }
    @media screen and (max-width: 428px){
        height: calc(100vh + 70px);
    } 
`;
const Wrap = styled.div`
    display: flex;

    width: 100%;
    height: 100%;

    @media screen and (max-width: 1180px){
        flex-flow: column;
        align-items: center;
    }
`;
const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    width: 50%;
`;
const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    width: 50%;
`;
const Title = styled.h2`
    font-size: 36px;
    margin: 30px 0px;
    color: #212023;
`;
const WrapInfo = styled.div`

`;
const Text = styled.p`
    font-size: 14px;
    color: #212023;
`;
const ImagenParking = styled.img`
    width: 60%;

    @media screen and (max-width: 1180px){
        width: 150%;
    }
`;
const Red = styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    top: 550px;
    right: 735px;
    border-radius: 50px;
    background-color: #F72444;
    z-index: 100;

    @media screen and (max-width: 1180px){
        top: 745px;
        right: 690px;
    }
    @media screen and (max-width: 428px){
        width: 8px;
        height: 8px;
        top: 660px;
        right: 328px;
    } 
`;
const Green = styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    top: 530px;
    right: 735px;
    border-radius: 50px;
    background-color: #01AF00;
    z-index: 100;

    @media screen and (max-width: 1180px){
        top: 725px;
        right: 690px;
    }
    @media screen and (max-width: 428px){
        width: 8px;
        height: 8px;
        top: 650px;
        right: 328px;
    } 
`;
const RedP1 = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    top: 430px;
    right: 480px;
    opacity: 0.5;
    background-color: #F72444;
    z-index: 100;

    @media screen and (max-width: 1180px){
        top: 615px;
        right: 420px;
    }
    @media screen and (max-width: 428px){
        width: 70px;
        height: 70px;
        top: 600px;
        right: 200px;
    } 
`;
const GreenP1 = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    top: 430px;
    right: 480px;
    opacity: 0.5;
    background-color: #01AF00;
    z-index: 100;

    @media screen and (max-width: 1180px){
        top: 615px;
        right: 420px;
    }
    @media screen and (max-width: 428px){
        width: 70px;
        height: 70px;
        top: 600px;
        right: 200px;
    } 
`;
const RedP2 = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    top: 430px;
    right: 323px;
    opacity: 0.5;
    background-color: #F72444;
    z-index: 100;

    @media screen and (max-width: 1180px){
        top: 615px;
        right: 250px;
    }
    @media screen and (max-width: 428px){
        width: 70px;
        height: 70px;
        top: 600px;
        right: 120px;
    } 
`;
const GreenP2 = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    top: 430px;
    right: 323px;
    opacity: 0.5;
    background-color: #01AF00;
    z-index: 100;

    @media screen and (max-width: 1180px){
        top: 615px;
        right: 250px;
    }
    @media screen and (max-width: 428px){
        width: 70px;
        height: 70px;
        top: 600px;
        right: 120px;
    } 
`;

const Main = () => {

    return (
        <LinearGradient>
            <Wrap>
                <Left>
                    <Title>Información</Title>
                    <WrapInfo>
                        <Text>Lugares disponibles: </Text>
                        <Text>Pluma: </Text>
                        <Text>Cajon P1: </Text>
                        <Text>Cajon P2: </Text>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </WrapInfo>
                </Left>
                <Right>
                    <Title>Mapa</Title>
                    <ImagenParking src={parking} alt="Parking"></ImagenParking>
                    
                    <Red></Red>
                    <Green></Green>

                    <RedP1></RedP1>
                    <GreenP1></GreenP1>

                    <RedP2></RedP2>
                    <GreenP2></GreenP2>
                </Right>
            </Wrap>
        </LinearGradient>
    );
};

export default Main;