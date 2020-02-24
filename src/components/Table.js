import React from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const StyledTableCell = withStyles(theme => ({
  root: {
    padding: 14,
    [theme.breakpoints.down("xs")]: {
      padding: "11px",
    },
  },
  head: {
    color: "#ffffff",
    fontSize: "1.8rem",
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  body: {
    fontSize: "1.2rem",
    backgroundColor: "#fff",
    "&:first-child": {
      fontWeight: "bold",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
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

const useStyles = makeStyles({
  table: {
    padding: "10px",
    textAlign: "center",
  },
  Body: {
    fontWeight: 600,
  },
  th: {
    textAlign: "center",
  },
})

const StreamTable = ({ headers, data, color }) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper} style={{ marginBottom: "30px" }}>
      <Table
        className={classes.table}
        style={{ backgroundColor: `${color}` }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow
            className={classes.Head}
            style={{ backgroundColor: color ? `${color}` : null }}
          >
            {headers.map((val, i) => (
              <StyledTableCell
                style={{
                  borderRight:
                    headers.length === i + 1
                      ? `1px solid ${color}`
                      : "1px solid white",
                }}
                key={i}
              >
                {val}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody className={classes.Body}>
          {data.map((element, i) => (
            <StyledTableRow key={i}>
              {element.rowData.map((td, index) => (
                <StyledTableCell
                  align="center"
                  style={{ border: `1px solid ${color}`, width: "33%" }}
                  scope="row"
                >
                  {td}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StreamTable
