/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
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
      <>
        <Header siteTitle={"Learning React"} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
        {/* {children} places everything rendered withing <Layout></Layout> within the main tags! important for accessibility  */}
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built by supasuma with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
  //   )}
  // />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
