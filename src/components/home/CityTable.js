import React from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import withWidth, { isWidthUp } from "@material-ui/core/withWidth"
import Grid from "@material-ui/core/Grid"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { Card } from "@material-ui/core"
import transitions from "@material-ui/core/styles/transitions"

const data = {
  itemHeader: "Ciudad - Nocturna",
  itemData: [
    { id: 1, value1: 1111, value2: 1111 },
    { id: 2, value1: 1111, value2: 1111 },
    { id: 3, value1: 1111, value2: 1111 },
    { id: 4, value1: 1111, value2: 1111 },
    { id: 5, value1: 1111, value2: 1111 },
    { id: 6, value1: 1111, value2: 1111 },
    { id: 7, value1: 1111, value2: 1111 },
    { id: 8, value1: 1111, value2: 1111 },
    { id: 9, value1: 1111, value2: 1111 },
    { id: 10, value1: 1111, value2: 1111 },
  ],
}

const StyledTableCell = withStyles(theme => ({
  root: {
    padding: props => (props.active ? "0" : "16px 5px"),
    [theme.breakpoints.down("xs")]: {
      padding: props => (props.active ? "0" : "10px 0px"),
    },
  },
  head: {
    backgroundColor: "#fdde95",
    fontSize: "27px",
    fontWeight: "bold",
    borderLeft: "4px solid #fef2d5",
    textAlign: "center",
    fontFamily: "Montserrat",
    "&:first-child": {
      borderLeft: "unset !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      minWidth: 67,
      borderLeft: "2px solid #fef2d5",
    },
  },
  body: {
    fontFamily: "Open Sans",
    fontSize: "27px",
    fontWeight: "0",
    backgroundColor: "#fff",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      "&:first-child": {
        fontWeight: "700",
      },
    },
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow)

const useStyles = makeStyles(theme => ({
  head: {
    backgroundColor: "#fcc43e",
    textAlign: "center",
    fontWeight: 700,
    color: "##383838",
    textTransform: "capitalize",
    fontSize: "2.1em",
    padding: 35,
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      padding: "20px 0px",
    },
  },
  headerArrow: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0px 2px",
    },
  },
  headerImage: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },

    [theme.breakpoints.down("xs")]: {
      width: 16,
      marginTop: 6,
      height: 12,
      marginLeft: 3,
    },
  },
  active: {
    color: "red",
    fontSize: "2.4rem",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
  table: {
    overflow: "hidden",
    tableLayout: "fixed",
  },
  tableContainer: {
    overflow: "hidden",
    marginTop: 20,
  },
  bottomCards: {
    width: "100%",
    display: "flex",
    height: 100,
    backgroundColor: transitions,
    marginTop: 20,
    marginBottom: 40,
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  cardItem: {
    width: "25%",
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 600,
    fontSize: 40,
    backgroundColor: "#fcc43e",
    textAlign: "center",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "center",
    padding: 15,
    "&:first-child": {
      marginLeft: 0,
    },
    "&:last-child": {
      marginRight: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "22px",
      marginLeft: 7,
      marginRight: 7,
      padding: 10,
    },
  },
}))

const getBodyData = data => {
  if (data == null) return null

  var parseData = []
  var finalData = []
  for (var key in data) {
    parseData.push({
      id: key,
      value: data[key],
    })
  }

  for (let i = 0; i < 10; i++) {
    finalData.push({
      id: i,
      value1: parseData[i].value,
      value2: parseData[i + 10].value,
    })
  }

  return finalData
}

const CityTable = ({ data }) => {
  const classes = useStyles()
  var bodyData = []
  // console.log("check data", data)
  if (data == null || data.values == null) {
    for (let i = 0; i < 10; i++) {
      bodyData.push({
        id: i,
        value1: "---",
        value2: "---",
      })
    }
  } else {
    bodyData = getBodyData(data.values)
  }
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <div className={classes.head}>{data.name}</div>
        <Table className={classes.table} aria-label="customized table">
          <TableBody>
            {bodyData.map((row, index) => (
              <StyledTableRow key={index} className={classes.Row}>
                <StyledTableCell
                  scope="row"
                  style={{
                    border: "2px solid #feebbf",
                    backgroundColor: "#fef2d5",
                    fontWeight: 700,
                  }}
                >
                  {row.id + 1}
                </StyledTableCell>
                <StyledTableCell
                  scope="row"
                  style={{
                    border: "2px solid #feebbf",
                    backgroundColor: "none",
                  }}
                >
                  {row.value1}
                </StyledTableCell>

                <StyledTableCell
                  scope="row"
                  style={{
                    border: "2px solid #feebbf",
                    backgroundColor: "#fef2d5",
                    fontWeight: 700,
                  }}
                >
                  {row.id + 11}
                </StyledTableCell>
                <StyledTableCell
                  scope="row"
                  style={{
                    border: "2px solid #feebbf",
                    backgroundColor: "none",
                  }}
                >
                  {row.value2}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data.name.search("Ciudad") >= 0 && (
        <div className={classes.bottomCards}>
          <span className={classes.cardItem}>A</span>
          <span className={classes.cardItem}>W</span>
          <span className={classes.cardItem}>Z</span>
          <span className={classes.cardItem}>Z</span>
        </div>
      )}
    </Grid>
  )
}

export default withWidth()(CityTable)
