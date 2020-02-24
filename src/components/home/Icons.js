import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Calander from "../../images/previous icon.png";
import Compare from "../../images/compare icon.png";
import Share from "../../images/share icon.png";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height:50,
    margin: "2rem 5px 2rem 5px",
    [theme.breakpoints.down("xs")]: {
      margin: "0px ",
      marginTop: "-5px"
    }
  },
  Icons: {
    display: "flex"
  },
  Container2: {
    margin: "0rem 5px 0 5px",
    display: "flex",
    flexWrap: "no-wrap",
    alignItems: "center",
    height: "-webkit-fill-available"
  },
  Item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:first-child":{
      justifyContent: "flex-start",
    },
    "&:last-child":{
      justifyContent: "flex-end",
      // marginRight:20
    },
    [theme.breakpoints.down("xs")]: {
      width: "15%",
      height: "15%",
    }
    
  },
  Icon: {
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "20%",
      height: "20%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15%",
      height: "15%"
    }
  },
  Para: {
    fontSize: "1.5rem",
    marginLeft: "1rem",
    color: "#150898",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px",
      fontSize: "0.9rem"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem"
    }
  },
  // justify_content: {
  //   // justifycontent: "space-between",
  //   alignSelf: "strech"
  // },
}));

function LiveStream() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.Icons}>
        <Grid
          item
          xs={12}
          className={classes.Container2}
        >
          {/* <div className={classes.justify_content}> */}
            <Grid item xs={12} className={classes.Item}>
              <img src={Calander} alt="img" className={classes.Icon} />
              <p className={classes.Para}>Día de ayer</p>
            </Grid>
            <Grid item xs={12} className={classes.Item}>
              <img src={Compare} alt="img" className={classes.Icon} />
              <p className={classes.Para}>Control</p>
            </Grid>
            <Grid item xs={12} className={classes.Item}>
              <img src={Share} alt="img" className={classes.Icon} />
              <p className={classes.Para}>Compartir</p>
            </Grid>
          {/* </div> */}
        </Grid>
      </div>
    </div>
  );
}

export default LiveStream;
