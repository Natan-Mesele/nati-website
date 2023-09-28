import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Contact() {
  return (
    <Container>
        <Fade bottom>
            <h2>Contact</h2>
            <label for="name">Name</label>
            <input type="name" id="name"/>

            <label for="email">Email</label>
            <input type="email" id="email"/>

            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>

            <input type="submit" value="Send Message"></input>
        </Fade>
    </Container>
  )
}

export default Contact

const Container = styled.div`
    text-align: left;
    padding: 2em;
    
    @media (min-width: 768px){
        margin: 0 4em;
    }

    @media (min-width: 920px){
        margin: 0 8em;
    }

    @media (min-width: 1020px){
        margin: 0 18em;
    }

    h2 {
        font-size: 2em;
        margin-bottom: 2em;
    }

    label {
        font-size: 1.2rem;
        display: block;
        margin-bottom: 1em;  
    }

    input, textarea {
        display: block;
        width: 100%;
        padding: .9em;
        border-radius: .5em;
        border: 1px solid gray;
        margin-bottom: 2em;
    }

    input[type="submit"]{
        color: white;
        background: #279EFF;
        border: none;
        width: unset;
        padding: .6em 1.2em;
        font-weight: bold;
        font-size:1.4em;
        cursor: pointer;
        border-radius: 5em;
    }
    
`