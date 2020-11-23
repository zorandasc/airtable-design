import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    file(relativePath: { eq: "mainBcg.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = ({ children }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        fluid={fluid}
        className="bcg"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
  }
`

export default Background
