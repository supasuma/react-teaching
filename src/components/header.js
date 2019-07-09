 import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"
import Container from "./container"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
      <h1 className={headerStyles.h1}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
              paddingBottom: `70px`,
          }}
        >
          React, <span style={{textDecoration: 'line-through'}}>don&#39;t</span> do it
        </Link>

        {/* {siteTitle} */}
      <Link
        to={`/about/`}
        style={{
          float: `right`,
          color: `white`,
          textDecoration: `none`,
          fontSize: `20px`,
        }}
      >
        About
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
