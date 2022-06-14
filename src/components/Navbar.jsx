import React from 'react';
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../images/Logo.png';
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    background: #212023;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    width: 100%;
    justify-content: space-between;
    padding: 0 8%;

    @media screen and (max-width: 1180px){
        display: none;
    }
`;
const NavItem = styled.div`
    display: flex;
    align-items: center;
`;
const NavLinks = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    cursor: pointer;
    transition: 0.1s ease;
    text-decoration: none;
    position: relative;
    -webkit-transition: all 0.4s ease;
	transition: all 0.4s ease;
    padding: 5px;

    &:after {
        content: "";
        position: absolute;
        height: 2px;
        background-color: #997dff;
        width: 0;
        left: 50%;
        bottom: 0;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        -webkit-transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
        transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
    }
    
    &:hover {
        color: #997dff;
    }
    
    &:hover:after {
        width: 100%;
    }
`;
const ImgLogo = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
`;
const NavLogo = styled.p`
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;
const NavResponsive = styled.div`
    display: none;

    @media screen and (max-width: 1180px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const LogoItem = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
`;
const LogoResponsive = styled.img`
    width: 60px;
    height: 60px;
`;
const NavLogoResponsive = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-left: 5px;
`;
const MobileIcon = styled.div`
    margin-top: 8px;
    color: #fff;
    font-size: 24px;
    position: absolute;
    right: 30px;
`;

const Navbar = ( {toggle,cartItems} ) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };  

    return (
        <>
            <NavbarContainer>
                <NavMenu>
                        <NavItem>
                            <NavLinks></NavLinks>
                        </NavItem>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <NavItem>
                            <ImgLogo src={logo} alt="Xpcialist" title="Logo"></ImgLogo>
                            <NavLogo onClick={toggleHome}>XTACIONAMIENTO</NavLogo>
                        </NavItem>
                    </Link>
                    <Link to={'/ayuda'} style={{ textDecoration: 'none' }}>
                        <NavItem>
                            <NavLinks>Ayuda</NavLinks>
                        </NavItem>
                    </Link>
                </NavMenu>
                <NavResponsive>
                    
                        <LogoItem>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <LogoResponsive src={logo} alt="XTACIONAMIENTO" title="Logo"></LogoResponsive>
                            </Link>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <NavLogoResponsive onClick={toggleHome}>XTACIONAMIENTO</NavLogoResponsive>
                            </Link>
                        </LogoItem>
                   
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                </NavResponsive>
            </NavbarContainer>
        </>
    );
};

export default Navbar;