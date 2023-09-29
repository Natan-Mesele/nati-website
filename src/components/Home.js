import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Home() {
    const [text] = useTypewriter({
        words: ['Front-End Developer!', 'Web Developer', 'UI/UX Design'],
        loop: {},
      })
  return (
    <Wrap>
        <ItemText>
            <Fade bottom>
                <p>WELCOME TO MY WORLD</p>
                <h1>Hi, I’m <span>Natan Mesele</span></h1>
            </Fade>
            <Fade bottom>
                <Btn>
                    <span>{text}</span>
                    <Cursor cursorColor='white' /> 
                </Btn>
                <a href="#">Go To Portfolio</a>
            </Fade>
        </ItemText>
    </Wrap>
  )
}

export default Home

const Wrap = styled.div`
    background: url("img/hacker.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    opacity: .8;

    @media (min-width: 768px) {
        padding: 4em 5em;
    }

    @media (min-width: 768px){
        padding: 3em 6em;
      }
    
    @media (min-width: 920px){
    padding: 4em 8em;
    }
`
const ItemText = styled.div`
    padding-top: 25vh;
    text-align: center;
    color: white;

    p {
        font-weight: bold;
        letter-spacing: .2em;
        margin-bottom: 1em;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2em;

        span {
            color: #278EFF;
         }
    }

    h2 {
        margin-bottom: 3em;
        display: block;
    }

    a {
        background: black;
        color: white;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: bold;
        padding: .8em 1.2em;
        border: 2px solid white;
        border-radius: 5em;
        margin-top: 1.5em;
        display: inline-block;

        &:hover {
            background: #279EFF;
            border: 2px solid black;
        }
    }

    @media (min-width: 920px) {
        margin-top: 3em;

        h1 {
            font-size: 3rem;
            margin-bottom: 1.5em;
        }

        p {
            margin-bottom: 2em;
        }
    }
`
const Btn = styled.div`
    margin-top: -3em;

    span {
        align-items: center;
        font-size: 3.5em;
    }
`
