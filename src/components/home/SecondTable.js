import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rowsData from '../../data/brinco.json'

const StyledTableCell = withStyles(theme => ({
  root:{
    padding:14
  },
  head: {
    backgroundColor: "#6681f1",
    color: "#ffffff",
    fontSize: "1.2rem",
    fontWeight: "bold",
    borderRight: "4px solid #c2cdf9",
    textAlign: "center",
    [theme.breakpoints.down("xs")]:{
      fontSize: "1rem",
    }
  },
  body: {
    fontSize: "1.2rem",
    backgroundColor: "#fff",
    '&:first-child':{
      fontWeight:'bold'
    },
    [theme.breakpoints.down("xs")]:{
      fontSize: "0.8rem",
    }
    
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);


const useStyles = makeStyles({
  table: {
    padding: "10px",
    border: "4px solid #6681f1 !important",
    textAlign: "center"
  },
  Body: {
    fontWeight: 600
  },
  th: {
    
    textAlign: "center"
  }
});

function StreamTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow className={classes.Head}>
            <StyledTableCell>Premio</StyledTableCell>
            <StyledTableCell
              align="center"
              color="black"
              display="flex"
              className={classes.Cell}
            >
              Apuestas
              <br /> Ganadoras
            </StyledTableCell>
            <StyledTableCell align="center" className={classes.Cell}>
              Premio pro
              <br /> Apuesta ($)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.Body}>
          {rowsData.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                style={{ borderBottom: "4px solid #6681f1" }}
                scope="row"
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ border: "4px solid #6681f1" }}
                className={classes.Cells}
              >
                {row.values.winningBet.value}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{ borderBottom: "4px solid #6681f1" }}
                className={classes.Cells}
              >
                {row.values.betAward.value}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StreamTable;
