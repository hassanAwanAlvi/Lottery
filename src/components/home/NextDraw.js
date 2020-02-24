import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import SecondTable from "./SecondTable"
import Icons from "./Icons"
import Button from "@material-ui/core/Button"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  Container: {
    backgroundColor: "#262d31",
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
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      textAlign: "left",
      margin: 0,
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  Img: {
    margin: "0.9rem",
  },
  brincoContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#4163ee",
    [theme.breakpoints.down("xs")]: {
      height: 80,
    },
  },
  brinco: {
    width: "15%",
    margin: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: 60,
      height: 45,
    },
  },
  Premiados: {
    display: "flex",
    flexDirection: "column",
    margin: "3rem 0",
    [theme.breakpoints.down("xs")]: {
      margin: "1.5rem 0",
    },
  },

  PremiadosHeading: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Montserrat', sans-serif;",
    fontWeight: "bold",
    fontSize: "1.7rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  span: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    borderRadius: 50,
    padding: "1.5rem",
    color: "white",
    margin: "4px",
    width: "70px",
    height: "70px",
    position: "relative",
  },
  avatar: {
    fontWeight: "bold",
    fontFamily: "'Montserrat', sans-serif;",
    backgroundColor: "#4163ee",
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  },
  circle: {
    position: "absolute",
    margin: "0px -5px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 0px",
    },
  },
  numbers: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3rem",
    padding: "0px 12px",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem",
      padding: "0",
    },
  },
  icons: {
    marginBottom: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  Btn: {
    width: "fit-content",
    padding: "1rem 3rem",
    borderRadius: "50px",
    fontSize: "2rem",
    marginTop: "3rem",
    backgroundColor: "#4163ee",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 2rem",
      fontSize: "1.5rem",
      marginTop: "1.5rem",
      borderRadius: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 2rem",
      fontSize: "1.5rem",
      marginTop: "1rem",
      borderRadius: "50px",
    },
  },
  Pozo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "3rem 0",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 0",
    },
  },
  Loader: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    border: "6px solid white",
    marginRight: "10px",
    borderTopColor: "#fcc43e",
    transform: "rotate(45deg)",
  },
  timer: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
}))

function LiveStream() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      brinco: file(relativePath: { eq: "brinco.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <div className={classes.root} id={"bronco-section"}>
      <div className={classes.Border}>
        <div className={classes.Container}>
          <div className={classes.Loader}></div>
          <Typography variant="h4" component="h2" className={classes.h3}>
            Próximo sorteo: <span className={classes.timer}>1</span> día{" "}
            <span className={classes.timer}>17</span> horas{" "}
            <span className={classes.timer}>32</span> minutos
          </Typography>
        </div>

        <div className={classes.brincoContainer}>
          <Img
            fluid={data.brinco.childImageSharp.fluid}
            className={classes.brinco}
            fadeIn={false}
            alt="Brinco de hoy"
          />
        </div>
        <div className={classes.Premiados}>
          <Typography
            variant="h4"
            component="h3"
            className={classes.PremiadosHeading}
          >
            Numeros Premiados
          </Typography>
        </div>
        <div className={classes.numbers}>
          <Avatar className={classes.avatar}>11</Avatar>
          <Avatar className={classes.avatar}>06</Avatar>
          <Avatar className={classes.avatar}>30</Avatar>
          <Avatar className={classes.avatar}>02</Avatar>
          <Avatar className={classes.avatar}>13</Avatar>
          <Avatar className={classes.avatar}>10</Avatar>
        </div>
        <div className={classes.Premiados}>
          <Typography
            variant="h3"
            component="h2"
            className={classes.PremiadosHeading}
          >
            Distribucion de Premios
          </Typography>
        </div>
        <SecondTable />
        <div className={classes.Pozo}>
          <Typography
            variant="h3"
            component="h2"
            className={classes.PremiadosHeading}
          >
            Pozo Estimado para la Proxima <br /> Jugada
          </Typography>
          <Button variant="contained" color="primary" className={classes.Btn}>
            $ 73.000.000
          </Button>
        </div>
      </div>
      <div className={classes.icons}>
        <Icons />
      </div>
    </div>
  )
}

export default LiveStream
