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
            <img src="img/n.jpg"/>
            <p>I am a 28 years old Full-stack web developer.</p>
            <PhoneNum>
                <Phone/>
                +251 926 412 563
            </PhoneNum>
            <Email>
                <Em/>
                nattymesele@gmail.com
            </Email>
            <Location>
                <Loc/>
                Hawassa , Ethiopia
            </Location>
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
    background: white;
    width: 50%;
    height: 100vh;
    padding-top: 1em; 
    text-align: center;
    transform: ${props => props.show ? 'translateX(0%)':'translateX(100%)'};
    transition: transform .5s;

    img {
        width: 15em;
        height: 20em;
        object-fit: cover;
        border-radius: 50%;
    }

    p {
        margin-top: 2em;
        padding: 0 2em;
        text-align: left;
        line-height: 1.5em;
        color: gray;
    }

    @media (min-width: 920px){
        width: 25%;
    }

    li a {
        color: black;
        display: block;
        padding: 1em 1.5em;
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
const PhoneNum = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5em;
    padding: 1em 2em;
    color: gray;
`
const Phone = styled(PhoneIcon)`
`
const Email = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5em;
    padding: 1em 2em;
    color: gray;
`
const Em = styled(EmailIcon)`
`
const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5em;
    padding: 1em 2em;
    color: gray;
`
const Loc = styled(LocationOnIcon)`
`