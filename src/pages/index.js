import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Prism from "prismjs";

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <h1 css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}>Learning React</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
              {node.frontmatter.title}
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
      
      

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`




// const IndexPage = () => (
//   <Layout>
//     <h1>Amazing Pandas Eating Things</h1>
//     <div>
//       <img
//         src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
//         alt="Group of pandas eating bamboo"
//       />
//     </div>
//   </Layout>
// )
// export default IndexPage


  // < pre className = "language-jsx gatsby-highlight" >
  //   <code className="language-jsx gatsby-highlight">
  //     {`
  // import {Form} from 'semantic-ui-react'
          
  //         const Usage = () => (
  //   <Form>
  //           <Form.Group>
  //             <Form.Input />
  //             <Form.Select />
  //             <Form.Button />
  //           </Form.Group>
  //         </Form>
  // )
          
  //         `}
  //     </code>
  //   </pre >
