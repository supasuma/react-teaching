import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"
import Container from "./container"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <Container>
      <h1 className={headerStyles.h1}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        {/* {siteTitle} */}
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
