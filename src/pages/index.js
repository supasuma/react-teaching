import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Prism from "prismjs";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Getting started</h1>
    <p>A React component is a reusable pieces of code describing a UI. To make these reusable pieces 
      dynamic you need to be able to supply them with different data. You do that with input called 
      “props”. Props are (appropriately enough) properties supplied to React components..</p>
    
    <pre className="language-jsx gatsby-highlight">
      <code className="language-jsx gatsby-highlight">
          {`
  import {Form} from 'semantic-ui-react'
          
          const Usage = () => (
    <Form>
            <Form.Group>
              <Form.Input />
              <Form.Select />
              <Form.Button />
            </Form.Group>
          </Form>
  )
          
          `}
      </code>
    </pre>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage


// export default () => (
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

