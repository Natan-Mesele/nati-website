import React from 'react'
import styled from 'styled-components'

function Portfolio() {
  return (
    <Container>
        <Wrap>
            <img src="img/tesla.jpg"/>
        </Wrap>
        <Wrap>
            <img src="img/apple.png"/>
        </Wrap>
        <Wrap>
            <img src="img/amazon.jpg"/>
        </Wrap>
        <Wrap>
            <img src="img/netflix.jpg"/>
        </Wrap>
        <Wrap>
            <img src="img/disney.jpg"/>
        </Wrap>
        <Wrap>
            <img src="img/disney.jpg"/>
        </Wrap>
    </Container>
  )
}

export default Portfolio

const Container = styled.div`
    margin-top: 4em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));

    @media (min-width: 768px){
        margin: 2em 2em;
    }

    @media (min-width: 920px){
        margin: 2em 4em;
        display: grid;
        grid-template-columns: repeat(3, minmax(19rem, 1fr));
    }  
`
const Wrap = styled.div`
    margin: 2em;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`