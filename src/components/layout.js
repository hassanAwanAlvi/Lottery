import React from "react"
import PropTypes from "prop-types"
import SEO from "./seo"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../theme"

const Layout = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SEO title={title ? title : " "} />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
