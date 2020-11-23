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

const Wrapper = styled.section``

export default Hero
