import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "./Table"
import Icons from "./Icons"
import Grid from "@material-ui/core/Grid"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import TableHeader from "./tableHeader"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1rem 0.2rem 0 0.2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "6px",
    },
  },
  Border: {
    border: "1px solid #b5adad",
    borderRadius: "4px",
    overflow: "hidden",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  Container: {
    backgroundColor: "#e3003b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.2rem",
    },
  },
  h3: {
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  ImgContainer: {
    margin: "0.1rem 0.5rem",
    width: 39,
    height: 26,
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 21,
    },
  },
  Image: {
    backgroundColor: "#fcc43e",
    display: "flex",
    justifyContent: "center",
    // height: "10%",
    padding: "25px 0",
    // backgroundColor: "#4163ee",
    [theme.breakpoints.down("xs")]: {
      padding: "15px 0",
      // height: 80,
    },
  },
  quinielaImg: {
    width: "100%",
    // margin: "1rem",
    // height: 96,
    // maxWidth: "150px",
    height: "97px",
    // minheight: "50px",
    // maxheight: "50px",
    [theme.breakpoints.down("xs")]: {
      // maxWidth: "120px",
      height: "47px",
      // maxWidth: "120px",
      // maxheight: "44px",
      // width: 60,
    },
  },
}))

function LiveStream() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      liveIcon: file(relativePath: { eq: "live_icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      quiniela: file(relativePath: { eq: "quiniela.svg" }) {
        relativePath
      }
    }
  `)
  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className={classes.Border}>
          <TableHeader />
          <div className={classes.Image}>
            <img
              src={require(`../../images/${data.quiniela.relativePath}`)}
              className={classes.quinielaImg}
            />
            {/* <Img
              fluid={data.quiniela.absolutePath}
              className={classes.quinielaImg}
              fadeIn={false}
              alt="Sorteando - en vivo ..."
            /> */}
          </div>
          <Table />
        </div>
        <Icons />
      </Grid>
    </div>
  )
}

export default LiveStream
