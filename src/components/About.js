import React from 'react'
import styled from "styled-components"

function About() {
  return (
    <Container>
        <ImgHero img src="img/na.png"/>
        <Hero>
              <h1>About</h1>
              <h2>FULL-STACK DEVELOPER & SOFTWARE DEVELOPER.</h2>
              <p>Hello! I'm <span>Natan Mesele</span>, a Full-Stack web developer. I have a big interest in computer science.
                  My dream is to be a computer scientist and a university professor (on computer science). I have attended full-stack development courses at Udemy and Evangadi Bootcamps. To further strengthen my future web development studies, I joined Coursera Inc. which is a U.S.-based massive open online course provider. I am a hardworking, honest, and willing to learn new skills.</p>
              <p>I'm happy to connect, listen and help. Let's work together and build something awesome. Let's turn your idea to an even greater product.</p>
              <CV>
                <a target="_blank" href="cv.pdf" class="primary-about">View Resume</a>
                <a target="_blank" href="cv.pdf" class="primary-about">View certificates</a>
              </CV>
        </Hero>
    </Container>
  )
}

export default About

const Container = styled.div`
  text-align: left;
  margin: 1em;
  padding: 1.5em;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px){
    margin: 3em 6em;
    
  }

  @media (min-width: 920px){
    margin: 4em 8em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
const Hero = styled.div`
  margin-top: 4em;
  
  h1 {
    margin-bottom: .5em;
  }

  h2 {
    margin-bottom: .5em;
    line-height: 1.5em;
  }

  p {
    text-align: justify;
    line-height: 1.3em;
    margin-bottom: 1em;
    color: gray;
    letter-spacing: .1em;

    span {
      color: #279EFF;
      font-weight: bold;

    }
  }
`
const CV = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    margin-right: 1em;
    text-decoration: none;
    background: #279EFF;
    color: white;
    font-weight: bold;
    font-size: 1.1em;
    padding: .6em 1.2em;
    border-radius: 5em;
    
  }
  
`
const ImgHero = styled.img`
    margin-top: 2em;
    width: 15em;
    height: 20em;
    border-radius: 50%;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
`
