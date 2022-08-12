import React from "react"
import styled from "styled-components"
// import big from "../assets/images/big.jpg"
import { StaticImage } from "gatsby-plugin-image"
const Images = () => {
  return (
    <Wrapper>
      <article>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="tracedSVG"
          className="expample-img"
          layout="constrained"
          as="article"
        />
      </article>
      <article>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="tracedSVG"
          className="expample-img"
          layout="fixed"
          width={200}
          height={100}
          as="div"
        />
      </article>
      <article>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="tracedSVG"
          className="expample-img"
          layout="fullWidth"
          as="article"
        />
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  width: 70vh;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
  /* @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  } */
`
export default Images
