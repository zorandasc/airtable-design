import React from "react"
import styled from "styled-components"


const Footer = () => {
  return (
  <Wrapper>
    <p>
        &copy; {new Date().getFullYear()} zorandsc. All rights reserved.
        Built with Gatsby
  </p>
</Wrapper>
)
}

const Wrapper=styled.footer`
height:5rem;
background: var(--clr-black);
display:grid;
place-items: center;
text-align:center;
padding:2rem;
p{
  color: var(--clr-white);
  margin-bottom:0;
  @media (max-width:576px){
    font-size:0.75rem;
  }
}
`



export default Footer
