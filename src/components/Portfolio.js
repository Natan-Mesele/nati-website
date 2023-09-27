import React from 'react'
import styled from 'styled-components'

function Portfolio() {
  return (
    <Container>
        <Wrap>
            <img src="img/back.jpg"/>
        </Wrap>
        <Wrap>
            <img src="img/back.jpg"/>
        </Wrap>
        <Wrap>
            <img src="img/back.jpg"/>
        </Wrap>
        <Wrap>
            <img src="img/back.jpg"/>
        </Wrap>
        <Wrap>
            <img src="img/back.jpg"/>
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
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`