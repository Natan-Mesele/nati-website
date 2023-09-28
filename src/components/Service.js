import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Service() {
  return (
    <Container>
        <Fade bottom>
            <h1>Why Choose My Services</h1>
            <p>I'm a great team player, and I enjoy working with others. some of my work qualities are listed below.</p>
        </Fade>
        <Fade bottom>
        <Wrap>
            <Feature>
                <img src="img/aperture.svg" alt="aperture"></img>
                <h2>Web Development</h2>
                <BtnFeature>
                    <a href="#">Web</a>
                    <a href="#">Graphics</a>
                    <a href="#">SEO</a>
                </BtnFeature>
                <p>I do some research before starting my development to choose the right way for the job.</p>
            </Feature>
            <Feature>
                <img src="img/box.svg" alt="aperture"></img>
                <h2>Fully Responsive</h2>
                <BtnFeature>
                    <a href="#">Web</a>
                    <a href="#">Graphics</a>
                    <a href="#">SEO</a>
                </BtnFeature>
                <p>Working on projects, I write clean codes to make them better readable for any partner or client.</p>
            </Feature>
            <Feature>
                <img src="img/cloud-off.svg" alt="aperture"></img>
                <h2>Beautiful Code</h2>
                <BtnFeature>
                    <a href="#">Web</a>
                    <a href="#">Graphics</a>
                    <a href="#">SEO</a>
                </BtnFeature>
                <p>Always responsible to complete any given project on time.</p>
            </Feature>
            <Feature>
                <img src="img/codesandbox.svg" alt="aperture"></img>
                <h2>On Time</h2>
                <BtnFeature>
                    <a href="#">Web</a>
                    <a href="#">Graphics</a>
                    <a href="#">SEO</a>
                </BtnFeature>
                <p>I like to learn new things and I have the ability to learn it quickly.</p>
            </Feature>
            <Feature>
                <img src="img/gift.svg" alt="aperture"></img>
                <h2>Quick Learner</h2>
                <BtnFeature>
                    <a href="#">Web</a>
                    <a href="#">Graphics</a>
                    <a href="#">SEO</a>
                </BtnFeature>
                <p>Easy to reach and happy to help.</p>
            </Feature>
            <Feature>
                <img src="img/monitor.svg" alt="aperture"></img>
                <h2>Online</h2>
                <BtnFeature>
                    <a href="#">Web</a>
                    <a href="#">Graphics</a>
                    <a href="#">SEO</a>
                </BtnFeature>
                <p>I do some research before starting my development to choose the right way for the job.</p>
            </Feature>
        </Wrap> 
        </Fade>
    </Container>
  )
}

export default Service

const Container = styled.div`
    margin-top: 5em;
    background: #F1EFEF;

    h1 {
        padding-top: 1.5em;
        margin-bottom: 1em;
    }

    p {
        color: gray;
        margin: 0 1em;
        line-height: 1.6em;
    }
`

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    
    @media (min-width: 920px){
        display: grid;
        grid-template-columns: repeat(3, minmax(19rem, 1fr));
    }
`

const Feature = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    margin: 2em;
    background: white;
    padding: 2em 1em;

    img {
        margin: 1em 0;
    }
`
const BtnFeature = styled.div`
    margin: 1em 0;

   a {
    margin-right: 1em;
    text-decoration: none;
    color: gray;
    
   } 
`