import React from "react"
import Background from "./Background"
import styled from "styled-components"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <Wrapper>
      <Background>
        <article>
          <h3>If you can dream it we can created</h3>
          <h1>let your home be uniq and stylish</h1>
          <Link to="/projects">Projects</Link>
        </article>
      </Background>
    </Wrapper>
  )
}

const Wrapper = styled.section`
article{
  color:var(--clr-white);
  width:85vw;
  max-width:800px;
  text-align:center;
  h1{
    text-transform:uppercase;
    font-weight:500;
    line-height:1.25;
    margin:2rem 0 3rem 0;
    letter-spacing:3px;
  }
  h3{
    font-weight:400;
    font-family: "Caveat", cursive;
  }
  a{
    background:transparent;
    border:2px solid var(--clr-white);
    color:var(--clr-white);
    padding:0.25rem 1rem;
    text-transform:capitalize;
    letter-spacing:5px;
    font-size:1rem;
    cursor: pointer;
    transition:var(--transition);
  }
  a:hover{
    background: var(--clr-white);
      color: var(--clr-black);

  }
}


`

export default Hero
