import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <div>
      <h1>hello from fetch data</h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      <h3>{data.site.info.author}</h3>
    </div>
  )
}

export default FetchData
