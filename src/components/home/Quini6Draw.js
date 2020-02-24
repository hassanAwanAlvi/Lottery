import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

import Button from "@material-ui/core/Button"
// import Table from "../components/Table"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Table from "../Table"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1rem 0.2rem 0 0.2rem",
    fontFamily: "Montserrat, sans-serif",
    [theme.breakpoints.down("sm")]: {
      padding: "6px",
    },
  },
  Border: {
    border: "1px solid #dbecf8",
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
    margin: "2rem 0",
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
    fontSize: "2rem",
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

  Btn: {
    width: "fit-content",
    padding: "1rem 3rem",
    // border: "1px solid #fff",
    color: "white",
    borderRadius: "50px",
    fontSize: "2rem",
    outline: "none",
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
    padding: "25px 10px",
    textAlign: "center",
    // [theme.breakpoints.down("sm")]: {
    //   height: "25vh",
    //   padding: "px 10px",
    // },
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
    alignItems: "center",
  },
  sortSpan: {
    fontSize: "30px",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },

  sortStrong: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "orange",
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
    width: "100%",
    justifyContent: "space-between",
    margin: "0 auto",
    padding: "0 1rem",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  num: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "84px",
    height: "84px",
    backgroundColor: "#fff",
    borderRadius: "50% ",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "84px",
    textAlign: "center",
    color: "black",

    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
      fontSize: "24px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40px",
      height: "40px",
      lineHeight: "40px",
      fontSize: "18px",
    },
  },
  alert: {
    fontSize: "12px",
    position: "absolute",
    top: "-25px",
    left: "0px",
    lineHeight: "15px",
    color: "#000",
  },
  plusDesc: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "95%",
    padding: "5px .8rem",
    marginBottom: "20px",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
      padding: "5px 0",
    },
  },
  row: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    borderBottom: "2px solid #000",
    padding: "10px",
    margin: "0 15px",
    // flexDirection: "column",
  },
  col: {
    padding: "0 10px",
    flexBasis: "50%",
  },
  para: {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  h4: {
    margin: 0,
    fontSize: "1.6em",
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  h5: {
    margin: 0,
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  h6: {
    margin: 0,
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  separator: {
    height: "10px",
    outline: "none",
    border: "none",
  },
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalContainer: {
    display: "flex",
    padding: "0 1rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cont: {
    flexBasis: "33%",
    display: "flex",
    justifyContent: "center",
    borderRight: "1px solid #000",
    padding: "5px 12px",
    fontSize: "1.6em",
    fontWeight: "500",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "1.1em",
    // },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8em",
      padding: "5px 2px",
    },
  },
}))

function LiveStream({ img, prize, backgroundColor, prizeHeadColor }) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      quini6: file(relativePath: { eq: "quini6.svg" }) {
        relativePath
      }
    }
  `)
  let image = data.quini6.relativePath
  let wins = [10, 20, 30, 40, 50, 60]
  let color = "#1CD7DA"
  let tableHeaders = ["Aciertos", "Ganadores", "Premio"]
  let tableData = [
    {
      rowData: ["5+2", "12.734", "32"],
    },
    {
      rowData: ["5+1", "1.066", "149"],
    },
    {
      rowData: ["5", "23", "88"],
    },
    {
      rowData: ["4+2", "VACANTE", "61.231.151"],
    },
  ]
  let sort = { sorteo: "1448", Fetcha: "19/1/2020" }
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
          {sort && (
            <div className={classes.sort}>
              <span className={classes.sortSpan}>Sorteo#:</span>
              <strong
                className={classes.sortStrong}
                style={{
                  backgroundColor: sort.color ? `${sort.color}` : `${color}`,
                }}
              >
                {sort.sorteo}
              </strong>{" "}
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
          )}
          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Tradicional Primer Sorteo
            </Typography>
          </div>
          {/* <div className={classes.numbers}> */}
          <div className={classes.numRow}>
            {wins.map((a, i) => {
              return (
                <div
                  style={{
                    flexBasis: "15%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={classes.num}
                    style={{
                      color: "white",
                      backgroundColor: color ? `${color}` : null,
                    }}
                  >
                    {a}
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ padding: "0 1.1rem", marginTop: "20px" }}>
            <Table headers={tableHeaders} data={tableData} color={color} />
          </div>

          <hr
            className={classes.separator}
            style={{ backgroundColor: color }}
          />

          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Tradicional Segunda del Quini
            </Typography>
          </div>
          <div className={classes.numRow}>
            {wins.map((a, i) => {
              return (
                <div
                  style={{
                    flexBasis: "15%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={classes.num}
                    style={{
                      color: "white",
                      backgroundColor: color ? `${color}` : null,
                    }}
                  >
                    {a}
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ padding: "0 1.1rem", marginTop: "20px" }}>
            <Table headers={tableHeaders} data={tableData} color={color} />
          </div>
          <hr
            className={classes.separator}
            style={{ backgroundColor: color }}
          />

          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Revancha
            </Typography>
          </div>
          <div className={classes.numRow}>
            {wins.map((a, i) => {
              return (
                <div
                  style={{
                    flexBasis: "15%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={classes.num}
                    style={{
                      color: "white",
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
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Pozo Estimado para la Proxima Jugada
            </Typography>
          </div>
          <div className={classes.centerContainer}>
            <Button
              variant="contained"
              style={{
                backgroundColor: color ? `${color}` : null,
              }}
              className={classes.Btn}
            >
              $ 56.714.048,73
            </Button>
            <h2>Vacante</h2>
          </div>
          <hr
            className={classes.separator}
            style={{ backgroundColor: color }}
          />
          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Siempre Sale
            </Typography>
          </div>
          <div className={classes.numRow}>
            {wins.map((a, i) => {
              return (
                <div
                  style={{
                    flexBasis: "15%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={classes.num}
                    style={{
                      color: "white",
                      backgroundColor: color ? `${color}` : null,
                    }}
                  >
                    {a}
                  </div>
                </div>
              )
            })}
          </div>
          <div className={classes.horizontalContainer}>
            <p className={classes.cont}>con 5 aciertos </p>
            <p className={classes.cont}>54 ganadores </p>
            <p className={classes.cont} style={{ border: "none" }}>
              $88.751,38
            </p>
          </div>
          <hr
            className={classes.separator}
            style={{ backgroundColor: color }}
          />
          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Super canasta de Premios Extra
            </Typography>
          </div>
          <div className={classes.centerContainer}>
            <Button
              variant="contained"
              style={{
                backgroundColor: color ? `${color}` : null,
                boxShadow: "none",
              }}
              className={classes.Btn}
            >
              $ 3,000,000
            </Button>
            <h3 style={{ margin: "10px 0" }}>Con 6 Aciertos 301 Ganadores</h3>
            <h3 style={{ margin: 0 }}>que cobran $ 16.611,30 cada uno</h3>
          </div>
          <div
            className={classes.Pozo}
            style={{
              backgroundColor: color,
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              className={classes.PremiadosHeading}
              style={{ color: prizeHeadColor ? prizeHeadColor : "white" }}
            >
              Pozo Estimado para la Proxima Jugada
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: color ? `${color}` : null,
                border: "1px solid #fff",
              }}
              className={classes.Btn}
            >
              $1,000,000
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveStream
