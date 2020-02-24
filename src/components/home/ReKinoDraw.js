import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
// import SecondTable from "../components/home/SecondTable"
import Icons from "../home/Icons"
import Button from "@material-ui/core/Button"
import Table from "../Table"
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
    fontSize: "1.3rem",
    color: "#ffffff",
    fontFamily: "'Montserrat', sans-serif;",
    fontWeight: 600,
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
    padding: "25px 0",
    [theme.breakpoints.down("xs")]: {
      padding: "15px 0",
    },
  },
  brinco: {
    width: "100%",
    height: "97px",
    [theme.breakpoints.down("xs")]: {
      height: "47px",
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
    fontWeight: "bolder",
    fontSize: "1.8rem",
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
    // flexBasis: "15%",
    fontWeight: "bold",
    fontFamily: "'Montserrat', sans-serif;",
    backgroundColor: "#4163ee",
    marginTop: "15px",
    marginRight: "10px",
    marginLeft: "10px",
    boxShadow: "5px",
    width: "84px",
    height: "84px",
    // [theme.breakpoints.down("md")]: {
    //   width: theme.spacing(9),
    //   height: theme.spacing(9),
    // },
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      // flexBasis: "18%",
      width: "40px",
      height: "40px",
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
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "3rem",
    padding: "0px 15px",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem",
      padding: "0",
    },
  },
  icons: {
    marginBottom: "5rem",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  Btn: {
    width: "fit-content",
    padding: "1rem 3rem",
    border: "2px solid #fff",
    color: "white",
    borderRadius: "50px",
    fontSize: "2rem",
    // marginTop: "3rem",
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
    justifyContent: "space-around",
    alignItems: "center",
    height: "25vh",
    margin: "30px 0 0 0",
    padding: "10px 10px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      // margin: "2rem 0",
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
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  sort: {
    display: "flex",
    justifyContent: "space-around",
    margin: "30px 0px 50px 0px",
    padding: "0 1em",
    alignItems: "flex-end",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    flexBasis: "33%",
    textAlign: "center",
  },
  sortSpan: {
    fontSize: "1.5em",
    fontWeight: "700",
    marginBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
  sortStrong: {
    fontSize: "1.8em",
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "orange",
    width: "93%",
    padding: "20px 30px",
    borderRadius: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      padding: "15px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      padding: "10px 10px",
    },
  },
  numRow: {
    display: "flex",
    width: "80%",
    justifyContent: "space-around",
    margin: "0px auto 30px auto",
    maxWidth: "630px",
    flexWrap: "wrap",
  },
  num: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "84px",
    height: "84px",
    backgroundColor: "#4163ee",
    borderRadius: "50% ",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "84px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "inset 0px 0px 40px 0px rgba(0, 0, 0, 0.3)",

    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
      fontSize: "20px",
      lineHeight: "50px",
      boxShadow: "inset 0px 0px 20px 0px rgba(0, 0, 0, 0.3)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40px",
      height: "40px",
      lineHeight: "40px",
      fontSize: "16px",
    },
  },
  subHeading: {
    margin: "10px auto 0 auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
}))

function LiveStream({
  rekinoData,
  wins,
  img,
  tableHeaders,
  tableData,
  prize,
  color,
  backgroundColor,
  prizeHeadColor,
}) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      rekino: file(relativePath: { eq: "rekino.svg" }) {
        relativePath
      }
    }
  `)
  let image = data.rekino.relativePath
  let {
    tableData1,
    tableHeaders1,
    tableData2,
    tableHeaders2,
    sort,
    total,
    winningNums,
  } = rekinoData
  return (
    <div className={classes.root} id={"bronco-section"}>
      <div style={{ backgroundColor: "#fff" }}>
        <div className={classes.Border}>
          <div className={classes.Container}>
            <div className={classes.Loader}></div>
            <Typography variant="h4" component="h2" className={classes.h3}>
              Próximo sorteo: <span className={classes.timer}>1</span> día{" "}
              <span className={classes.timer}>17</span> horas{" "}
              <span className={classes.timer}>32</span> minutos
            </Typography>
          </div>

          <div
            className={classes.brincoContainer}
            style={{ backgroundColor: color ? `${color}` : null }}
          >
            <img
              className={classes.brinco}
              src={require(`../../images/${image}`)}
            />
          </div>

          <div className={classes.numRow} style={{ marginTop: "50px" }}>
            {winningNums.map((a, i) => {
              return (
                <div
                  style={{
                    flexBasis: "20%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={classes.num}
                    style={{
                      backgroundColor: color ? `${color}` : null,
                    }}
                  >
                    {a}
                  </div>
                </div>
              )
            })}
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

          <div style={{ padding: "0 0.8rem" }}>
            <Table headers={tableHeaders1} data={tableData1} color={color} />
          </div>

          <div className={classes.Premiados}>
            <Typography
              variant="h3"
              component="h2"
              className={classes.PremiadosHeading}
            >
              Premois Con El Numero De Carton
            </Typography>
            <h2 className={classes.subHeading}>Un led+Rack Para C/U</h2>
          </div>

          <div style={{ padding: "0 0.8rem" }}>
            <Table headers={tableHeaders2} data={tableData2} color={color} />
          </div>

          <div className={classes.sort}>
            <div className={classes.col}>
              <span className={classes.sortSpan}>Sorteo#:</span>
              <strong
                className={classes.sortStrong}
                style={{
                  backgroundColor: sort.color ? `${sort.color}` : `${color}`,
                }}
              >
                {total.Caducidad}
              </strong>
            </div>
            <div className={classes.col}>
              <span className={classes.sortSpan}>Total de Ganadores:</span>
              <strong
                className={classes.sortStrong}
                style={{
                  backgroundColor: sort.color ? `${sort.color}` : `${color}`,
                }}
              >
                {total.totalen}
              </strong>
            </div>
            <div className={classes.col}>
              <span className={classes.sortSpan}>Total en Premios:</span>
              <strong
                className={classes.sortStrong}
                style={{
                  backgroundColor: sort.color ? `${sort.color}` : `${color}`,
                }}
              >
                {total.totalde}
              </strong>
            </div>
          </div>

          <div className={classes.Premiados}>
            <Typography
              variant="h3"
              component="h2"
              className={classes.PremiadosHeading}
            >
              Proximo Sorteo
            </Typography>
          </div>

          <div className={classes.sort}>
            <div className={classes.col}>
              <span className={classes.sortSpan}>Numero#:</span>
              <strong
                className={classes.sortStrong}
                style={{
                  backgroundColor: sort.color ? `${sort.color}` : `${color}`,
                }}
              >
                {sort.Numero}
              </strong>
            </div>
            <div className={classes.col}>
              <span className={classes.sortSpan}>Fetcha:</span>
              <strong
                className={classes.sortStrong}
                style={{
                  backgroundColor: sort.color ? `${sort.color}` : `${color}`,
                }}
              >
                {sort.Fetcha}
              </strong>
            </div>
            <div className={classes.col}>
              <span className={classes.sortSpan}>Color del Carton:</span>
              <strong
                className={classes.sortStrong}
                style={{
                  backgroundColor: sort.color ? `${sort.color}` : `${color}`,
                }}
              >
                {sort.Color_del_Carton}
              </strong>
            </div>
          </div>

          {prize && (
            <div
              className={classes.Pozo}
              style={{
                backgroundColor: backgroundColor
                  ? `rgba(${backgroundColor}, .8)`
                  : "transparent",
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                className={classes.PremiadosHeading}
                style={{ color: prizeHeadColor ? prizeHeadColor : "white" }}
              >
                {prize[0]}
              </Typography>
              <Button
                variant="contained"
                style={{
                  backgroundColor: color ? `${color}` : null,
                }}
                className={classes.Btn}
              >
                ${prize[1]}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LiveStream
