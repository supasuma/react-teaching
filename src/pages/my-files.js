import React from "react"
import { graphql }  from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <table>
                <thead>
                    <tr>
                        <td>Birthtime</td>
                        <td>extension</td>
                        <td>pretty size</td>
                        <td>relativePath</td>
                    </tr>
                </thead>
                <tbody>
                    { data.allFile.edges.map(({ node }, index) => (
                        <tr key={index}>
                            <td>{node.birthTime}</td>
                            <td>{node.extension}</td>
                            <td>{node.prettySize}</td>
                            <td>{node.relativePath}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </Layout>
    )
}


export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
