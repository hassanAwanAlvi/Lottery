import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

import Button from "@material-ui/core/Button"
// import Table from "../components/Table"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Table from "../Table"
import Icons from "./Icons"

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
    height: "30vh",
    margin: "30px 0 0 0",
    padding: "10px 10px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      margin: "2rem 0",
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
    width: "80%",
    justifyContent: "space-around",
    margin: "0 auto",
    maxWidth: "630px",
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
    boxShadow: "inset 0px 0px 40px 0px rgba(0, 0, 0, 0.3)",

    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
      fontSize: "24px",
      lineHeight: "50px",
      boxShadow: "inset 0px 0px 20px 0px rgba(0, 0, 0, 0.3)",
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
      fontSize: "0.6rem",
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
      fontSize: "0.8rem",
    },
  },
  h5: {
    margin: 0,
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
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
  icons: {
    marginBottom: "5rem",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
}))

function LiveStream({ img, sort, prize, backgroundColor, prizeHeadColor }) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      lotoPlus: file(relativePath: { eq: "loto_plus.svg" }) {
        relativePath
      }
    }
  `)
  let image = data.lotoPlus.relativePath
  let wins = [10, 20, 30, 40, 50, 60, 70, 80]
  let wins10 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  let color = "#1C8A9F"
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
  return (
    <div className={classes.root} id={"bronco-section"}>
      <div style={{ backgroundColor: "#DBECF8" }}>
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
              Tradicional
            </Typography>
          </div>
          {/* <div className={classes.numbers}> */}
          <div className={classes.numRow}>
            {wins.map((a, i) => {
              return (
                <div
                  style={{
                    flexBasis: "25%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={classes.num}
                    style={{
                      boxShadow: "0px 7px 0px 0px #a4d0ef",

                      color: i === 3 || i === 7 ? "red" : null,
                    }}
                  >
                    {/* {i === 3 && (
                    <span
                      style={{
                        fontSize: "18px",
                        position: "relative",
                        top: "-65px",
                        left: "20px",
                        lineHeight: "15px",
                        color: "#000",
                        fontStyle: "normal",
                      }}
                    >
                      Jackpot
                    </span>
                  )} */}
                    {a}
                  </div>
                </div>
              )
            })}
          </div>
          <div className={classes.plusDesc}>
            <div className={classes.row}>
              <div className={classes.col}>
                <p className={classes.para}> GANADORES DEL JACKPOT </p>
                <p className={classes.para}>(6+2 JACK)</p>
              </div>
              <div className={classes.col}>
                <h4 className={classes.h4}>
                  VACANTE <br /> $196.499.729,01
                </h4>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col}>
                <p className={classes.para}> GANADORES DE 6+1</p>
              </div>
              <div className={classes.col}>
                <h5 className={classes.h5}>VACANTE $48.376.023,24</h5>
              </div>
            </div>
            <div className={classes.row} style={{ border: "none" }}>
              <div className={classes.col}>
                <p className={classes.para}>GANADORES DEL LOTO (6)</p>
              </div>
              <div className={classes.col}>
                <h6 className={classes.h6}>VACANTE $10.861.703,49</h6>
              </div>
            </div>
          </div>

          <div style={{ padding: "0 1.1rem", marginTop: "20px" }}>
            <Table headers={tableHeaders} data={tableData} color={color} />
          </div>

          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Desquite
            </Typography>
          </div>
          {/* <div className={classes.numbers}> */}
          <div className={classes.numRow}>
            {wins.map((a, i) => {
              return (
                <div
                  style={{
                    flexBasis: "25%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={classes.num}
                    style={{
                      boxShadow: "0px 7px 0px 0px #a4d0ef",

                      color: i === 3 || i === 7 ? "red" : null,
                    }}
                  >
                    {a}
                  </div>
                </div>
              )
            })}
          </div>

          <div className={classes.plusDesc}>
            <div className={classes.row}>
              <div className={classes.col}>
                <p className={classes.para}> GANADORES DEL JACKPOT </p>
                <p className={classes.para}>(6+2 JACK)</p>
              </div>
              <div className={classes.col}>
                <h4 className={classes.h4}>
                  VACANTE <br /> $196.499.729,01
                </h4>
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.col}>
                <p className={classes.para}> GANADORES DE 6+1</p>
              </div>
              <div className={classes.col}>
                <h5 className={classes.h5}>VACANTE $48.376.023,24</h5>
              </div>
            </div>
            <div className={classes.row} style={{ border: "none" }}>
              <div className={classes.col}>
                <p className={classes.para}>GANADORES DEL LOTO (6)</p>
              </div>
              <div className={classes.col}>
                <h6 className={classes.h6}>VACANTE $10.861.703,49</h6>
              </div>
            </div>
          </div>

          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Sale o sale
            </Typography>
          </div>
          {/* <div className={classes.numbers}> */}
          <div className={classes.numRow}>
            {wins10.map((a, i) => {
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
                      boxShadow: "0px 7px 0px 0px #a4d0ef",

                      color:
                        i === 3 || i === 4 || i === 8 || i === 9 ? "red" : null,
                    }}
                  >
                    {a}
                  </div>
                </div>
              )
            })}
          </div>

          <div className={classes.plusDesc}>
            <div className={classes.row}>
              <div className={classes.col}>
                <p className={classes.para}> GANADORES DEL JACKPOT </p>
                <p className={classes.para}>(6+2 JACK)</p>
              </div>
              <div className={classes.col}>
                <h4 className={classes.h4}>
                  VACANTE <br /> $196.499.729,01
                </h4>
              </div>
            </div>
            <div className={classes.row} style={{ border: "none" }}>
              <div className={classes.col}>
                <p className={classes.para}> GANADORES DE 6+1</p>
              </div>
              <div className={classes.col}>
                <h5 className={classes.h5}>VACANTE $48.376.023,24</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveStream
