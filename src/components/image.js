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

const Image = () => (
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 300) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  // />
  <div>
    <img
      src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
      alt="Group of pandas eating bamboo"
    />
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
  

)
export default Image
