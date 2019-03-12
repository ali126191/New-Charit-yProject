import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */



// const SINGLE_IMAGE = graphql`
//         {
//           img1: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//             childImageSharp {
//               fluid(maxWidth:500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }`


// const SINGLE_IMAGE = graphql`
//         {
//           img1: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//             childImageSharp {
//               fluid(maxWidth:500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           },
//           img2: file(relativePath: { eq: "gatsby-icon.png" }) {
//             childImageSharp {
//               fluid(maxWidth:500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           },
//           img3: file(relativePath: { eq: "person.jpg" }) {
//             childImageSharp {
//               fluid(maxWidth:500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           },
//         }
//       `

// export default function Gallery() {
//   return (
//     <StaticQuery
//       query={SINGLE_IMAGE}
//       render={data => {
//         const img1 = data.img1.childImageSharp.fluid;
//         // const img2 = data.img2.childImageSharp.fluid;
//         // const img3 = data.img3.childImageSharp.fluid;
//         return (
//           <>
//             <Img fluid={img1} />
//             {/* <Img fluid={img2} />
//             <Img fluid={img3} /> */}
//           </>
//         )
//       }}
//     />
//   )
// }


