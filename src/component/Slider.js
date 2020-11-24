import React from "react"
import { graphql,  useStaticQuery  } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { FaQuoteRight } from "react-icons/fa"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"


import Title from "./Title"

const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Customers"}}) {
      nodes {
        data {
          name
          title
          quote
          image {
            localFiles {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`


const Slider = () => {

  const {allAirtable:{nodes:customers}}=useStaticQuery(query)

  const [index, setIndex]=React.useState(0)

  React.useEffect(()=>{
    const lastIndex=customers.length - 1;
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  },[index, customers])

  return <Wrapper className="section">
    <Title title="reviews"></Title>
    <div className="section-center">
      {customers.map((customer, customerIndex)=>{

      const {data:{image, name, title, quote}}=customer
      const customerImg = image.localFiles[0].childImageSharp.fixed

      let position="nextSlide"//na pocetku ovo ce btit sa drugi u nizu
      //pomjeri desno
      if(customerIndex === index){
        position="activeSlide"//za prvi u nizu centriraj
      }

      if(customerIndex === index-1 || 
        (index === 0 && customerIndex === customers.length -1)){
          position="lastSlide"//na pocetku za zadnjeg u nizu pomjeri lijevo
        }
      

      return (
        <article key={customerIndex} className={position}>
          <Image fixed={customerImg} className="img"></Image>
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>
        )

      })}
      <button className="prev" onClick={()=>{setIndex(index-1)}}>
        <FiChevronLeft /></button>
      <button className="next" onClick={()=>{setIndex(index-1)}}>
      <FiChevronRight /></button>
      </div>
    </Wrapper>
}

const Wrapper=styled.div`
 background: var(--clr-grey-10);
 .section-center{
   border:2px solid red;
   margin-top:4rem;
   width:80vw;
   max-width:800px;
   //height:450px;
   text-align:center;
   position: relative;
  //display:flex;
  //overflow:hidden;
   .img{
     border-radius:50%;
     margin-bottom:1rem;
   }
   h4{
    text-transform: uppercase;
      color: var(--clr-primary-5);
      margin-bottom: 0.25rem;
   }
   .title {
      text-transform: capitalize;
      margin-bottom: 0.75rem;
    }
    .text{
      max-width:45em;
      margin:0 auto;
      line-height:2;
      color: var(--clr-grey-5);
    }
    .icon{
      font-size:3rem;
      margin-top:1rem;
      color: var(--clr-primary-5);
    }
    .prev,
    .next{
      position:absolute;
      top:200px;
      transform: translateY(-50%);
      background: var(--clr-grey-5);
      color: var(--clr-white);
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }
    .prev:hover,
    .next:hover {
      background: var(--clr-primary-5);
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
    @media (min-width: 800px) {
      .prev,
      .next {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }
 }
`


export default Slider
