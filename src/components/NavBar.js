import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { menuData } from '../data/MenuData'
import { Button } from './Button';

const NavBar = () => {

    return (
        <Navigation>
           <Logo to="/">TshibssFy</Logo>
           <MobileMenu/>
           <NavigationMenu>
               { 
                menuData.map((item,index) => <NavigationMenuLink key={index} to={item.link}>
                    {item.title } 
                </NavigationMenuLink>)
               }
           </NavigationMenu>
           <NavButton>
                <Button to="/">Contact Us </Button>
            </NavButton>
        </Navigation>

    )
}


const Navigation = styled.nav`
    position : fixed;
    top : 0;
    z-index : 100;
    width : 96%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 2rem 2rem;
    background : #000;
    color : #FFF;

    @media screen and (min-width: 725px) {
        width : 95%;
    }

    @media screen and (min-width: 1440px) {
        width : 97%;
    }
`
const NavLink = styled(Link)`
    text-decoration : none;
    color : #FFF;
    height : 100%;
    cursor : pointer;
`
const Logo = styled(NavLink)`
`
const MobileMenu = styled(FaBars)`
    margin-right : 2rem;
    width : 30px;
    height : 30px;
    @media screen and (min-width: 725px) {
        display : none;
    }
`

const NavigationMenu = styled.div`
    display : none;
    @media screen and (min-width: 725px) {
        display : flex;
        align-items : center;
        justify-content : space-around;
        gap : 1rem;
     }

`

const NavigationMenuLink = styled(NavLink)`
`

const NavButton = styled.div`
    display : none;
    @media screen and (min-width: 725px) { 
        display : revert;
    }
`

export default NavBar
