import React from 'react'
import styled from "styled-components"

function Home() {
  return (
    <Wrap>
        <ItemText>
            <p>WELCOME TO MY WORLD</p>
            <h1>Hi, I’m <span>Natan Mesele</span></h1>
            <a href="#">Go To Portfolio</a>
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
    padding-top: 20vh;
    text-align: center;
    color: white;

    p {
        font-weight: bold;
        letter-spacing: .2em;
        margin-bottom: 1em;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1em;
    }

    a {
        background: #279EFF;
        color: white;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: bold;
        padding: .8em 1.2em;
        border-radius: 5em;
    }
`

