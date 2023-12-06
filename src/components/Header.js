import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-scroll"
import { animateScroll as scroll } from 'react-scroll';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const closeMenu = () => {
        scroll.scrollToTop();
    };

  return (
    <Container>
        <a>
            <img src="img/white-logo.png" />
        </a>
        <Menu>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        </Menu>
        <MenuWrapper>
            <CustomMenu onClick={(()=>setBurgerStatus(true))}/>
        </MenuWrapper>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={(()=>setBurgerStatus(false))}/>
            </CloseWrapper>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Service</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    position: fixed;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    

    @media (min-width: 768px){
        padding: 3em 6em;
      }
    
      @media (min-width: 920px){
        padding: 0 8em;
      }

      img {
        width: 5em;
        }

    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 1rem;

        span {
            color: #279EFF;
        }
    }
`

const MenuWrapper = styled.div`
    @media (min-width: 768px){
        display: none;
    }
`
const Menu = styled.div`
    display: flex;
    justify-content: center;

    a {
        padding: 0 20px;
    }
    @media (max-width: 768px){
        display: none;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    color: white;

    @media (min-width: 768px) {
        display: none;
    }
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background: white;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1.5em 1.5em;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform .6s;

     a {
        text-decoration: none;
        font-weight: bold;
        display: block;
        padding: 1em 0;
        border-bottom: 1px solid gray;
        color: black;
      }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    color: black;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
