import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      color: "#fff",
    },
  },
  Pozo: {
    display: "flex",
    justifyContent: "center",
    padding: "0 20px",
  },
  PozoHeading: {
    padding: "0.5rem 1rem",
    fontWeight: 600,
    fontFamily: "'Montserrat', sans-serif;",
    textAlign: "center",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  line: {
    height: "0.5rem",
    width: "30%",
    color: "black",
    backgroundColor: "#fcc43e;",
    border: "none",
  },
  PozoPara: {
    margin: "30px 0",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "500",
    fontFamily: "'Montserrat', sans-serif;",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0",
      fontSize: "0.8rem",
    },
  },
}))

const TableDesc = ({ descData, heading }) => {
  console.log("at desc page", heading)
  const classes = useStyles()
  return (
    <div>
      <Grid container item xs={12} className={classes.Pozo}>
        <Typography variant="h2" component="h2" className={classes.PozoHeading}>
          {heading}
          {/* El Binco de Hoy
          <br /> - al instante - */}
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
          {descData.map(para => (
            <div>
              {para} <br />
              <br />
            </div>
          ))}
        </Typography>
      </Grid>
    </div>
  )
}

export default TableDesc
