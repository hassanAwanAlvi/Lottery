import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: "#262d31",
    paddingBottom: 55,
  },
  Content: {
    background: "#262d31",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0rem",
    },
  },
  Footer: {
    display: "flex",
    justifyContent: "space-around",
  },
  FooterLink: {
    color: "#ffff",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },
  Footertext: {
    color: "white",
    fontSize: "18px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  Links: {
    display: "contents",
  },
  logoContainer: {
    width: 300,
    justifyContent: "center",
  },
  Logo: {
    width: "90%",
  },
  hr: {
    border: "0.5px solid grey",
  },
}))

const Footer = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "quinielashoylogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className={classes.root}>
      <div className={classes.Content}>
        <Grid container item xs={12} className={classes.Footer}>
          <Typography className={classes.Links}>
            <Link href="/api/" className={classes.FooterLink}>
              API
            </Link>
            <Link href="/nosotros/" className={classes.FooterLink}>
              Nosotros
            </Link>
            <Link href="/contacto/" className={classes.FooterLink}>
              Contacto
            </Link>
          </Typography>
        </Grid>
        <hr className={classes.hr} />
        <Grid
          container
          item
          xs={12}
          className={classes.Footer}
          style={{ flexDirection: "column" }}
          alignItems="center"
        >
          <div className={classes.logoContainer}>
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className={classes.Logo}
              alt="Quinielashoy.com"
            />
            <Typography className={classes.Footertext}>
              <span>Jugar Compulsivamente es Prejudical para la Salud</span>
            </Typography>
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
