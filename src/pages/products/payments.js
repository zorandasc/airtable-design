import React from "react"
import { Layout } from "../../component"
import styled from "styled-components"
import { Link } from "gatsby"


const Payments = props => {
    const path=props.location.pathname.slice(1)
    return(

        <Layout>
            <Wrapper>
                <div>
                    <h1>{path}</h1>
                    <Link to="/" className="btn">home</Link>
                </div>
            </Wrapper>
            
        </Layout>
    )
}


const Wrapper=styled.main``


export default Payments