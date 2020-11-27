import { Link } from "gatsby"
import React, { useContext } from "react"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"

const NavLink = ({ page }) => {
  const { links } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <button>{page}</button>
      <div className="links">
        {links.map((link, index) => {
          const { url, label, icon } = link
          if (link.page === page) {
            return (
              <Link to={url} key={index}>
                {icon}
                {label}
              </Link>
            )
          } else {
            return null
          }
        })}
        <div className="caret"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  padding: 1rem 0;
  position: relative;
  button {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
    padding: 10px 20px;
    width: 100%;
    text-transform: capitalize;
    position: relative;
  }
  .links {
    position: absolute;
    background: var(--clr-white);
    border-radius: var(--radius);
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 2rem;
    grid-gap: 1rem 4rem;
    visibility: hidden;
    a {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.5rem;
      grid-gap: 0.5rem;
      align-items: center;
      color: #0a2540;
      text-transform: capitalize;
      font-weight: 700;
      .icon {
        color: #88add2;
      }
      &:hover {
        color: #88add2;
        .icon {
          color: #0a2540;
        }
      }
    }
  }
  &:hover .links {
    visibility: visible;
  }
  .caret {
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--clr-white);
  }
`

export default NavLink
