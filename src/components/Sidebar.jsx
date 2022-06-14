import React from 'react';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link } from "react-router-dom";

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #212023;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
const CloseIcon = styled(FaTimes)`
    color: #fff;
`;
const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.8rem;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
    outline: none;
`;
const SidebarWrapper = styled.div`
    color: #fff;
`;
const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 0;
    
    @media screen and (max-width: 1180px){
        grid-template-rows: repeat(6, 80px);
    }
`;
const SidebarLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    font-weight: 500;

    &:hover {
        color: #674CC4;
        transition: 0.2s ease-in-out;
    }
`;

const Sidebar = ({isOpen, toggle, cartItems}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link to={'/'} style={{ textDecoration: 'none' }}><SidebarLink onClick={toggle}>Inicio</SidebarLink></Link>

                    <Link to={'/ayuda'} style={{ textDecoration: 'none' }}><SidebarLink onClick={toggle}>Ayuda</SidebarLink></Link>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    );
};

export default Sidebar;