import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  //Projects,
  GridProjects,
  Survey,
  Slider,
} from "../component"

const index = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <Hero projects={projects}></Hero>
      <About></About>
      {/* 
      <Projects projects={projects} title="latest projects"></Projects>
      */}
      <GridProjects projects={projects} title="latest projects"></GridProjects>
      <Survey></Survey>
      <Slider></Slider>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default index
