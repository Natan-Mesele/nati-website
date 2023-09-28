import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Footer() {
  return (
    <Container>
        <MainFooter>
            <Fade bottom>
            <h1>Address</h1>
            <p>Addis Ketema Subcity, Hawassa Ethiopia</p>
            <p>huluale12@gmail.com / nattymesele@gmail.com</p>
            <p>+251926412563</p>
            </Fade>
        </MainFooter>
        <NavFooter>
            <Fade bottom>
                <h1>Navigation</h1>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </Fade> 
        </NavFooter>
        <SocialFooter>
            <Fade bottom>
                <h1>Social Media</h1>
                <a target="_blank" href="https://www.facebook.com/natan.mesele.1/"><img src="img/face.png"/></a>
                <img src="img/git.png"/>
                <img src="img/inst.png"/>
                <img src="img/linkedin.png"/>
                <img src="img/twitter1.png"/>
            </Fade>
        </SocialFooter>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background: #051129;
    width: 100%;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    padding: 3em;
    text-align: left;
    color: white;

    @media (min-width: 920px){
        height: 50vh;
    }

    h1 {
        font-size: 1.2em;
        margin: 1em 0;
    }

    p {
        color: gray;
        font-size: .9em;
        margin-top: 1em;
    }

    @media (min-width: 768px){
        padding: 3em 6em;    
    }
`
const MainFooter = styled.div`
    
`
const NavFooter = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 818px){
        margin-left: 6em;
    }

    a {
        margin: .5em 0;
        color: gray;
        text-decoration: none;
        font-size: 1em;
    }
`
const SocialFooter = styled.div`
    color: white;

    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        background: white;
        border-radius: 50%;
        display: inline-block;
        margin-right: 1em;
        border: .5px solid gray;
    }
`