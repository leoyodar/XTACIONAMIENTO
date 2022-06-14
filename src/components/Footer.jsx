import React from 'react';
import {Facebook,Instagram,MailOutline,Phone,WhatsApp,YouTube} from "@mui/icons-material";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import styled from "styled-components";
import LogoXpcialist from "../images/Logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    background: #212023;
    color: #C4C4C4;

    @media screen and (max-width: 1180px){
        width: 100%;
        flex-direction: column;
    }
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 1180px){
        align-items: center;
    }
`;
const ContainerLogo = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1180px){
        flex-flow: column;
    }
`;
const ImgLogo = styled.img`
    width: 46px;
    height: 46px;

    @media screen and (max-width: 1180px){
        width: 55px;
        height: 55px;
        margin-bottom: 5px;
    }
`;
const TextLogo = styled.h3`
    Margin-left: 10px;
    color: #fff;
    font-size: 14px;

    @media screen and (max-width: 1180px){
        text-align: center;
        margin-bottom: 5px;
    }
`;
const LogoTextContainer = styled.div`

`;
const Desc = styled.p`
    margin: 20px 0px 15px 0px;
    width: 408px;

    @media screen and (max-width: 1180px){
        text-align: center;
        width: 100%;
    }
    @media screen and (max-width: 1600px){
        display: none;
    }
    @media screen and (max-width: 1440px){
        display: none;
    }
`;
const SocialContainer = styled.div`
    display: flex;
    margin-bottom: 20px;

    @media screen and (max-width: 1180px){
        justify-content: center;
    }
`;
const SocialIcon = styled.a`
    width: 40px;
    height: 40px;
    color: #c4c4c4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #fff;
        transition: 0.2s ease-in-out;
    }
`;
const Derechos = styled.p`
    font-size: 12px;
    font-weight: 200;

    @media screen and (max-width: 1180px){
        text-align: center;
    }
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const CenterDouble = styled.div`
    display: table-cell;
    justify-content: center;
    margin-right: 200px;

    @media screen and (max-width: 1180px){
        display: block;
        margin-right: 0;
    }
`;
const Title = styled.h3`
    margin-bottom: 5px;
    color: #fff;

    @media screen and (max-width: 1180px){
        text-align: center;
    }
`;
const HrSpace = styled.hr`
    width: 250px;
    margin-bottom: 30px;
    margin-right: 80px;

    @media screen and (max-width: 1180px){
        width: 100%;
        margin-right: 0;
    }
`;
const List = styled.div`
    margin: 0;
    padding: 0;
    list-style: disc;
    display: flex;
    flex-flow: column;
    margin-left: 20px;

    @media screen and (max-width: 1024px){
        margin-left: 0px;
    }
`;
const ListItem = styled.div`
    margin: 0 0 20px 0;
    cursor: pointer;
    width: 100%;
    transition: 0.2s ease-in-out;
    color: #C4C4C4;

    @media screen and (max-width: 1180px){
        display: flex;
        justify-content: center;
    }

    &:hover{
        color: #fff;
        transition: 0.2s ease-in-out;
    }
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 8%;

    @media screen and (max-width: 1600px){
        margin-left: 0;
    }
    @media screen and (max-width: 1440px){
        margin-left: 0;
    }
    @media screen and (max-width: 1180px){
        text-align: center;
        margin-left: 0;
    }
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1180px){
        justify-content: center;
    }
`;
const ContactItemMail = styled.a`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: #C4C4C4;
    text-decoration: none;

    &:hover {
        transition: 0.1s ease;
        color: #fff;
    }

    @media screen and (max-width: 1180px){
        justify-content: center;
    }
`;
const TextPhone = styled.p`
    font-family: Inter;
`;
  
const Footer = () => {
    return (
        <Container>
            <Left>
                <ContainerLogo>
                    <ImgLogo src={LogoXpcialist} alt="XTACIONAMIENTO" title="Logo"></ImgLogo>
                    <LogoTextContainer>
                        <TextLogo>XTACIONAMIENTO</TextLogo>
                    </LogoTextContainer>
                    
                </ContainerLogo>
                
                <Desc>Consigue tu lugar de estacionamiento de la manera mas sencilla</Desc>
                <SocialContainer>
                    <SocialIcon target="_blank" href="https://www.facebook.com/" rel="nofollow noopener noreferrer" aria-label="facebook">
                       <Facebook />
                    </SocialIcon>
                    <SocialIcon target="_blank" href="https://www.instagram.com/" rel="nofollow noopener noreferrer" aria-label="instagram"> 
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon target="_blank" href="https://www.youtube.com/" rel="nofollow noopener noreferrer" aria-label="youtube">
                        <YouTube />
                    </SocialIcon>
                    <SocialIcon target="_blank" href="https://api.whatsapp.com/send?phone=+5213310633400&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20XPCIALIST" rel="nofollow noopener noreferrer" aria-label="whatsapp">
                        <WhatsApp />
                    </SocialIcon>
                </SocialContainer>
                <Derechos>Derechos Reservados © 2022 XTACIONAMIENTO</Derechos>
            </Left>
            <Center>
                <CenterDouble>
                    <Title>Links</Title>
                    <HrSpace />
                    <List>
                        <Link to={'/'} style={{ textDecoration: 'none' }}><ListItem>Inicio</ListItem></Link>
                        <Link to={'/ayuda'} style={{ textDecoration: 'none' }}><ListItem>Ayuda</ListItem></Link>
                    </List>
                </CenterDouble>
                <CenterDouble>
                    <Title>Compañía</Title>
                    <HrSpace />
                    <List>
                        <Link to={'/ayuda'} style={{ textDecoration: 'none' }}><ListItem>Preguntas frecuentes</ListItem></Link>
                    </List>
                </CenterDouble>
            </Center>
            <Right>
                <Title>Contacto</Title>
                <HrSpace />
                <ContactItem>
                    <LocationOnRoundedIcon style={{marginRight:"10px"}}/>Zapopan, Jal
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/><TextPhone>(33) 3333 3333<br/>(33) 3333 3333<br/>(33) 3333 3333</TextPhone>
                </ContactItem>
                <ContactItemMail href="mailto:contacto@xtacionamiento.com">
                    <MailOutline style={{marginRight:"10px"}} /> CONTACTO@XTACIONAMIENTO.COM
                </ContactItemMail>
            </Right>
        </Container>
    );
};
  
export default Footer;