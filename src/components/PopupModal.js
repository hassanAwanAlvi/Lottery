import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { initializeFirebase } from './push-notification';
import { askForPermissioToReceiveNotifications } from './push-notification';
initializeFirebase()
const useStyles = makeStyles(theme => ({
  overlay: {
    display: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  display: {
    background: "white",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",

    display: "flex",
    flexDirection: "column",
    backgroundColor: "#272D31",
    zIndex: "20",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "3%",
    padding: "8px 0",
    textAlign: "center",
    color: "#E3E5ED",
    fontWeight: "600",
    fontSize: "1.7em",
    height: "6%",
    [theme.breakpoints.down("sm")]: {
      padding: "4px 0",
      fontSize: "1.6em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
    },
  },
  closeBtn: {
    float: "right",
    maxWidth: "35px",
    fontWeight: "bolder",
    fontSize: "1.2em",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6em",
    },
  },

  separator: {
    width: "100%",
    border: "1px solid #252A2E",
    margin: 0,
  },
  blueSeparator: {
    border: "2px solid #F5C65A",
    width: "15vw",
    maxWidth: "150px",
    margin: "0 auto",
  },
  modalData: {
    paddingLeft: "1rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  modalItem: {
    marginLeft: "15px",
    display: "flex",
    flexDirection: "row",
    padding: "15px",
    alignItems: "center",
    borderBottom: "2px solid #252A2E",
    fontSize: "1.8em",
    fontWeight: "400",
    color: "#E3E5ED",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
      fontWeight: "500",
      marginLeft: "7px",
      padding: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
      fontWeight: "500",
      marginLeft: "7px",
      padding: "5px",
    },
  },
  checkbox: {
    padding: "10px",
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  icon: {
    // borderRadius: 5,
    width: 28,
    height: 28,
    border: "3px solid #D3D5D5",
    "input:hover ~ &": {
      // backgroundColor: "#AEAEAE",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 20,
      height: 20,
    },
  },
  checkedIcon: {
    "&:before": {
      border: "3px solid #D3D5D5",
      display: "block",
      width: 28,
      height: 28,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
      [theme.breakpoints.down("sm")]: {
        width: 20,
        height: 20,
      },
    },
    "&:after": {
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    },
    "input:hover ~ &": {
      // backgroundColor: "#106ba3",
    },
  },
  label: {
    fontSize: "0.9em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  closeDiv: {
    marginRight: "-9px",
    marginTop: "-85px",
    flexBasis: "15%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-70px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-45px",
    },
  },
}))

const PopupModal = ({ close }) => {
  const classes = useStyles()

    const addSubScription = () => {
    console.log("Adding firebase")
        askForPermissioToReceiveNotifications()


    }

  const data = [
    "Quiniela",
    "Quiniela Primera",
    "Quiniela Matutina",
    "Quiniela Vespertina",
    "Quiniela Nocturna",
  ]
  return (
    <div className={classes.overlay}>
      <div className={classes.display}>
        <div className={classes.modalHeader}>
          <div style={{ flexBasis: "15%" }}></div>
          <div style={{ marginLeft: "22px", flexBasis: "80%" }}>
            Notify me about the lotteries right
          </div>
          <div className={classes.closeDiv}>
            <span onClick={() => close()}>
              <img
                src={require("../images/Close_Icon.svg")}
                alt="close icon"
                className={classes.closeBtn}
              />
            </span>
          </div>
        </div>
        <hr className={classes.blueSeparator} />
        <hr className={classes.separator} />
        <div className={classes.modalData}>
          {data.map(item => {
            return (
              <div className={classes.modalItem}>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                        onChange={() => addSubScription()}
                      color="primary"
                      className={classes.checkbox}
                      checkedIcon={
                        <span className={(classes.icon, classes.checkedIcon)} />
                      }
                      icon={<span className={classes.icon} />}
                    />
                  }
                  classes={{ label: classes.label }}
                  label={item}
                  labelPlacement="end"
                />{" "}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PopupModal
