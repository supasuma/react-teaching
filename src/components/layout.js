/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import GetDogPhoto from "../components/dog"

import Header from "./header"

import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={ data => (
        <div>
        {/* <Link to={`/`}> */}
          {/* <h3
            css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            background-color: purple;
          `}
          >
            {data.site.siteMetadata.title} */}
          {/* </h3>  */}
          <Header siteTitle={data.site.siteMetadata.title} />

        {/* </Link> */}
        
        <div
          css={css`
            margin: 0 auto;
            max-width: 1000px;
            padding: ${ rhythm(2)};
            padding-top: ${ rhythm(1.5)};
            
            `}
        > 
          {children}
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <GetDogPhoto />      
          </div>
        </div>
      </div>
    )}
   /> 
)


  // < !--Embedded YouTube Video!!! -- >

{/* < iframe width = "560" height = "315" src = "https://www.youtube.com/embed/4n0xNbfJLR8" frameborder = "0" allowfullscreen ></iframe > */}

// const Layout = ({ children }) => (
  // <StaticQuery
  //   query={graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `}
  //   render={data => (
      // <>
      //   <Header siteTitle={"Learning React"} />
      //   <div
      //     style={{
      //       margin: `0 auto`,
      //       maxWidth: 960,
      //       padding: `0px 1.0875rem 1.45rem`,
      //       paddingTop: 0,
      //     }}
      //   >
        {/* {children} places everything rendered withing <Layout></Layout> within the main tags! important for accessibility  */}
      //     <main>{children}</main>
      //     <footer>
      //       © {new Date().getFullYear()}, Built by supasuma with
      //       {` `}
      //       <a href="https://www.gatsbyjs.org">Gatsby</a>
      //     </footer>
      //   </div>
      // </>
  //   )}
  // />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
