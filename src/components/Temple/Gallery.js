import React from 'react'
import { SaticQuery, graphql } from 'gatsby'


const Gallery = () => {
  return (
    <div>
      <h1>hello from Gallery</h1>
      <SaticQuery query={graphql`
       {
        img1:file(relativePath:{ eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        } 
      }`
      } render={data => console.log(data)} />

    </div>
  )
}

export default Gallery