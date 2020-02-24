import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    flexGrow: 1,
  },
  container: {
    maxWidth: 750,
    margin: "auto",
    padding: 0,
  },
  appBar: {
    background: "#fcc43e",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "16px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "16px 6px",
    },
  },
  Logo: {
    // paddingLeft: "20px",
    marginTop: 4.5,
    marginLeft: "4px",
    width: "300px !important",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      margin: 0,
      width: "70%",
      // marginLeft: 10,
    },
    [theme.breakpoints.down("xs")]: {
      width: "230px !important",
      height: "28px !important",
    },
  },
  menuButton: {
    // float: "right",
    color: "#384fb5",
    margin: 0,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginRight: "-4px",
      // marginLeft: 10,
    },
  },
  images: {
    display: "flex",
    overflowX: "scroll",

    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0.5rem 2rem 0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem",
      margin: "0px 5px",
    },
  },
  imagesContainer: {
    backgroundColor: "#384fb5",
    // overflow: "scroll",
    // "::-webkit-scrollbar": {
    //   display: "none",
    // },
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 1,
    marginRight: 15,
    [theme.breakpoints.down("xs")]: {
      marginRight: 10,
    },
  },
  img: {
    display: "flex",
    width: 92,
    [theme.breakpoints.down("xs")]: {
      width: 43,
      display: "flex",
      justifyContent: "space-around",
    },
  },
}))

function Header() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "quinielashoylogo.png" }) {
        childImageSharp {
          fixed(width: 280) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      quiniela: file(relativePath: { eq: "quiniela.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      telekino: file(relativePath: { eq: "telekino.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      quini6: file(relativePath: { eq: "quini6.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      brinco: file(relativePath: { eq: "brinco.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      lotoPlus: file(relativePath: { eq: "loto_plus.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      quini: file(relativePath: { eq: "quini.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      totobingo: file(relativePath: { eq: "totobingo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      quinielaPoceada: file(relativePath: { eq: "quiniela_poceada.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      loto5: file(relativePath: { eq: "loto5.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      allAllJson {
        nodes {
          slug
        }
      }
    }
  `)

  const classes = useStyles()
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Container className={classes.container}>
          <Toolbar variant="dense" className={classes.toolBar}>
            <Link to="/">
              <Img
                fixed={data.logo.childImageSharp.fixed}
                alt="Quinielahoy.com"
                loading={"eager"}
                fadeIn={false}
                className={classes.Logo}
              />
            </Link>

            <MenuIcon
              fontSize="large"
              className={classes.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        className={classes.imagesContainer}
      >
        {menuOpen && (
          <Container className={classes.container}>
            <div className={classes.images}>
              <Grid
                item
                xs={3}
                sm={3}
                md={12}
                lg={12}
                className={classes.imgContainer}
              >
                <Link to="/">
                  <Img
                    fluid={data.quiniela.childImageSharp.fluid}
                    className={classes.img}
                    fadeIn={false}
                    alt="La quiniela de hoy"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={12}
                lg={12}
                className={classes.imgContainer}
              >
                <Link to="/telekino/">
                  <Img
                    fluid={data.telekino.childImageSharp.fluid}
                    className={classes.img}
                    fadeIn={false}
                    alt="Telekino de hoy"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={12}
                lg={12}
                className={classes.imgContainer}
              >
                <Link to="/quini6/">
                  <Img
                    fluid={data.quini6.childImageSharp.fluid}
                    className={classes.img}
                    fadeIn={false}
                    alt="Quini6 de hoy"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={12}
                lg={12}
                className={classes.imgContainer}
              >
                <Link to="/brinco/">
                  <Img
                    fluid={data.brinco.childImageSharp.fluid}
                    className={classes.img}
                    fadeIn={false}
                    alt="Brinco de hoy"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={12}
                lg={12}
                className={classes.imgContainer}
              >
                <Link to="/lotoplus/">
                  <Img
                    fluid={data.lotoPlus.childImageSharp.fluid}
                    className={classes.img}
                    fadeIn={false}
                    alt="Loto Plus de hoy"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={12}
                lg={12}
                className={classes.imgContainer}
              >
                <Link to="/quinielaplus/">
                  <Img
                    fluid={data.quini.childImageSharp.fluid}
                    className={classes.img}
                    fadeIn={false}
                    alt="Quiniela Plus de hoy"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={12}
                lg={12}
                className={classes.imgContainer}
              >
                <Link to="/totobingo/">
                  <Img
                    fluid={data.totobingo.childImageSharp.fluid}
                    className={classes.img}
                    fadeIn={false}
                    alt="Toto Bingo de hoy"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={12}
                lg={12}
                className={classes.imgContainer}
              >
                <Link to="/quiniela_poceada/">
                  <Img
                    fluid={data.quinielaPoceada.childImageSharp.fluid}
                    className={classes.img}
                    fadeIn={false}
                    alt="Quiniela Poceada de hoy"
                  />
                </Link>
              </Grid>
              <Grid
                item
                xs={3}
                sm={3}
                md={12}
                lg={12}
                className={classes.imgContainer}
              >
                <Link to="/loto5/">
                  <Img
                    fluid={data.loto5.childImageSharp.fluid}
                    className={classes.img}
                    fadeIn={false}
                    alt="Loto 5 de hoy"
                  />
                </Link>
              </Grid>
            </div>
          </Container>
        )}
      </Grid>
    </div>
  )
}

export default Header
