import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <a>
            <a href="#">Natty<span>Brand</span></a>
        </a>
        <Menu>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        </Menu>
        <CustomMenu onClick={(()=>setBurgerStatus(true))}/>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={(()=>setBurgerStatus(false))}/>
            </CloseWrapper>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
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
    background: #051129;
    z-index: 1;
    

    @media (min-width: 768px){
        padding: 3em 6em;
      }
    
      @media (min-width: 920px){
        padding: 0 8em;
      }

    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;

        span {
            color: #279EFF;
        }
    }
`
const Menu = styled.div`
    display: flex;
    flex: 1;
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
`
const BurgerNav = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: #20272E;
    width: 50%;
    height: 100vh;
    padding-top: 1em; 
    text-align: right;
    transform: ${props => props.show ? 'translateX(0%)':'translateX(100%)'};
    transition: transform .5s;

    @media (min-width: 920px){
        width: 25%;
    }

    li a {
        color: white;
        display: block;
        padding: 1em 1.5em;
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    color: white;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`