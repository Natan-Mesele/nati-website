import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Portfolio() {
  return (
    <Container>
        <Fade bottom>
            <h1>Recent Works</h1>
        </Fade>
            <Containers>
                <Fade bottom>
                <Wrap>
                <a target="_blank" href="https://github.com/Natan-Mesele/Tesla-clone"><img src="img/tesla.jpg"/></a>
                </Wrap>
                <Wrap>
                    <a target="_blank" href="https://github.com/Natan-Mesele/apple-clone"><img src="img/apple.png"/></a>
                </Wrap>
                <Wrap>
                    <a target="_blank" href="https://github.com/Natan-Mesele/amazon-clone"><img src="img/amazon.jpg"/></a>
                </Wrap>
                <Wrap>
                   <a target="_blank" href="https://github.com/Natan-Mesele/netflix-clone"><img src="img/netflix.jpg"/></a> 
                </Wrap>
                <Wrap>
                   <a target="_blank" href="https://github.com/Natan-Mesele/disney-clone"><img src="img/disney.jpg"/></a> 
                </Wrap>
                <Wrap>
                    <a target="_blank" href="https://github.com/Natan-Mesele/linkedin-clone"><img src="img/linkp.jpg"/></a>
                </Wrap>
                </Fade>
            </Containers>
    </Container>
  )
}

export default Portfolio

const Containers = styled.div`
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
const Container = styled.div`
    
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