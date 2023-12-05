import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Skill() {
  return (
    <Container>
        <Text>
        <Fade bottom>
            <h2>Development Skills</h2>
            <p>I develop my skill on online courses at Evangadi & Udemy.</p>
        </Fade> 
        <Fade bottom>  
            <Content>
                <p>HTML/CSS/BOOTSTRAP</p>
                <p>JAVASCRIPT/DOM/JQUERY</p>
                <p>REACT JS/NODE JS/EXPRESS JS/MY SQL</p>
            </Content>
        </Fade>     
        </Text>
    </Container>
  )
}

export default Skill

const Container = styled.div`
    background: url("img/back.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 80vh;
    color: white;
    padding: 1.5em;
    @media (min-width: 768px){
        margin: 4em 0;
        padding: 2em 4em;
    }

    @media (min-width: 920px){
        display:flex;
        justify-content: center;
        padding: 2em 4em;

        h2 {
            font-size: 2.5em;
        }
    }

`
const Text = styled.div`
    text-align: left;
    margin-top: 3em;

    p {
        margin-top: 2em;
    }
`
const Content = styled.div`
    margin-left: 2em;

    @media (min-width: 920px){
        margin-left: 6em;

        p {
            font-size: 2em;
        }
    }


    p {
        font-size: 1.2rem;
        font-weight: bold;
        position: relative;

        &:before {
            position: absolute;
            content: "";
            background: url("img/bullet.svg");
            width: 20px;
            height: 20px;
            background-size: contain;
            margin-right: 2em;
            left: -2em;
        }
    }
`