import React, { useState, useEffect } from "react"
import styled from "styled-components"
import base from "./Airtable"
import { FaVoteYea } from "react-icons/fa"

import Title from "./Title"

const Survey = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  //FUNKCIJA KOJA SE POKRECE SAMO JEDNOM U USEEFECTU INICIJALNO
  const getRecords = async () => {
    const records = await base("Survey")
      .select({})
      .firstPage()
      .catch(err => console.log("fucking", err))
    //destruct to new array kovertuje u nama prikladni oblik
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  //FUNKCIJA ZA UPDEJTOVANJE VOTASA
  const giveVote = async id => {
    setLoading(true)
    //imutability princim naprivai kopiju orginana pa nju modifikuj
    const tempItems = [...items].map(item => {
      if (item.id === id) {
        //destruct item
        let { id, fields } = item
        //update fields
        //destruct polja u fieldu i update samo votes tako sto ces staru uvecati za 1
        fields = { ...fields, votes: fields.votes + 1 }
        return { id, fields }
      } else {
        //ne radi nista
        return item
      }
    })

    //a zatim vrati natrag na airtable cms
    const records = await base("Survey")
      .update(tempItems)
      .catch(err => console.log("update", err))
    // a airtable cms ce vratitii svoju verziju pa moroamo ponovo konertovati u nama pogodnu formu da bi imali lokalno updejtovanu
    const newItems = records.map(record => {
      //izdviji samo id i fields , to nam samo treba
      //a ne ostali mambo jambo kurec koji bude
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
    setLoading(false)
  }

  useEffect(() => {
    getRecords()
  }, [])

  return (
    <Wrapper className="section">
      <div className="container">
        <Title title="survey"></Title>
        <h3>most important room in the house?</h3>
        {loading ? (
          <h3>loading...</h3>
        ) : (
          <ul>
            {items.map(item => {
              const {
                id,
                fields: { name, votes },
              } = item
              return (
                <li key={id}>
                  <div className="key">
                    {name.toUpperCase().substring(0, 2)}
                  </div>
                  <div>
                    <h4>{name}</h4>
                    <p>{votes}</p>
                  </div>
                  <button
                    onClick={() => {
                      giveVote(id)
                    }}
                  >
                    <FaVoteYea></FaVoteYea>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    h3 {
      text-align: center;
      color: var(--clr-grey-5);
      margin-bottom: 4rem;
    }
    ul {
      margin-top: 2rem;
      display: grid;
      gap: 2rem;
      grid-gap: 2rem;
      @media (min-width: 992px) {
        & {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (min-width: 1200px) {
        & {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
    li {
      background: var(--clr-grey-10);
      padding: 0.75rem 1rem;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 0 3rem;
      grid-gap: 0 3rem;
      align-items: center;
      .key {
        color: var(--clr-white);
        background: var(--clr-primary-7);
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        border-radius: var(--radius);
      }
      p {
        margin-bottom: 0;
        color: var(--clr-grey-5);
        letter-spacing: var(--spacing);
      }
      h4 {
        margin-bottom: 0;
      }
      button {
        background: transparent;
        border-color: transparent;
        font-size: 2rem;
        cursor: pointer;
        color: var(--clr-black);
      }
    }
  }
`

export default Survey
