import React from "react"

import Loadable from "react-loadable"

import Container from "@material-ui/core/Container"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import TotoBingoDraw from "../components/home/TotoBingoDraw"

const LoaderPlaceholder = () => (
  <div style={{ height: "100vh", width: "100vh" }}></div>
)

const LoadableHeader = Loadable({
  loader: () => import("../components/home/Header"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableTotoBingoDesc = Loadable({
  loader: () => import("../components/home/TotoBingoDesc"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableRemind = Loadable({
  loader: () => import("../components/home/Remind"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableFooter = Loadable({
  loader: () => import("../components/home/Footer"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableLayout = Loadable({
  loader: () => import("../components/layout"),
  loading: () => <LoaderPlaceholder />,
})

const useStyles = makeStyles(theme => ({
  maincontainer: {
    width: "100%",
    fontFamily: "'Montserrat', sans-serif",
    [theme.breakpoints.up("xs")]: {
      backgroundColor: "#F3F4FE",
    },
  },
  container: {
    maxWidth: 750,
    margin: "auto",
    padding: 0,
  },
  root: {
    [theme.breakpoints.up("xs")]: {
      boxShadow: "none",
    },
    backgroundColor: "#F3F4FE",
  },
}))

function App() {
  const classes = useStyles()
  return (
    <LoadableLayout
      title={"Toto Bingo | Resultados de Toto Bingo - al instante"}
    >
      <div className={classes.maincontainer}>
        <LoadableHeader />
        <Container className={classes.container}>
          <Paper className={classes.root}>
            <TotoBingoDraw />
            <LoadableTotoBingoDesc />
            <LoadableRemind />
          </Paper>
        </Container>
        <LoadableFooter />
      </div>
    </LoadableLayout>
  )
}
export default App
