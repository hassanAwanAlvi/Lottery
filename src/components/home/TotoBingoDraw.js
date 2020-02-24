import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Table from "../Table"
import Icons from "./Icons"
import bgImg from "../../images/bg3.png"
import StarIcon from "../../images/icon-star.png"

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
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
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
    justifyContent: "space-between",
    backgroundColor: "#4163ee",
    padding: "0 1.2rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0 0.7rem",
    },
  },
  hoveredSort: {
    display: "flex",
    flexBasis: "50%",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "30%",
    },
  },
  sortCont: {
    fontSize: "1.9em",
    padding: "10px 20px 20px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontWeight: "bolder",
    textAlign: "center",
    backgroundColor: "rgba(255,243,209, 0.8)",
    marginRight: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1em",
      padding: "15px 5px",
    },
  },
  brinco: {
    width: "35%",
    margin: "0.3rem 0",
    [theme.breakpoints.down("sm")]: {
      // width: "25%",
      // height: "18%",
    },
  },
  Premiados: {
    display: "flex",
    flexDirection: "column",
  },

  PremiadosHeading: {
    display: "flex",
    textAlign: "center",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Montserrat', sans-serif;",
    fontWeight: "bolder",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
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
    fontWeight: "bold",
    fontFamily: "'Montserrat', sans-serif;",
    backgroundColor: "#4163ee",
    marginTop: "15px",
    marginRight: "10px",
    marginLeft: "10px",
    boxShadow: "5px",
    width: "84px",
    height: "84px",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
    },
    [theme.breakpoints.down("xs")]: {
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
    color: "white",
    borderRadius: "50px",
    fontSize: "2rem",
    outline: "none",
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
      fontSize: "1.2rem",
      marginTop: "0.5rem",
      borderRadius: "50px",
    },
  },
  Pozo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    margin: "30px 0 0 0",
    padding: "40px 1em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "25vh",
      padding: "10px",
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
    padding: "5px 1.2rem",
    alignItems: "center",
  },
  sortSpan: {
    fontSize: "1.9em",
    fontWeight: "900",
    padding: "0 1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
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
    padding: "20px 1.8em",
    borderRadius: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 1.6em",
      fontSize: "1.6em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
      padding: "10px 1.6em",
    },
  },
  numRow: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: "15px auto",
    padding: "0 1rem",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "0",
    },
  },
  num: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "84px",
    height: "84px",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "50% ",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "84px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "65px",
      height: "65px",
      fontSize: "24px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "38px",
      height: "38px",
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
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
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
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8em",
      padding: "5px 2px",
    },
  },
  greenContainer: {
    padding: "20px 10px",
    margin: "15px 1rem",
    borderRadius: "5px",
    backgroundColor: "rgba(73,199,101,0.7)",
  },
  star: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  rotateText: {
    fontWeight: "bolder",
    fontSize: "1.8rem",
    transform: "rotate(-10deg)",
    margin: 0,
  },
  starContainer: {
    margin: "0 auto",
    backgroundImage: `url(${StarIcon})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "170px",
    height: "163px",
  },
  singleNum: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "84px",
    height: "84px",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "50% ",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "84px",
    textAlign: "center",
  },
  detailsCont: {
    display: "flex",
    margin: "15px auto",
    width: "95%",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  row: {
    fontSize: "1.4.em",
    fontWeight: "400",
    display: "flex",
  },
  col: {
    flexBasis: "33%",
    fontSize: "1.7em",
    padding: "15px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1em",
    },
  },
  value: { color: "grey", textAlign: "center" },
}))

function LiveStream({ img, prize, backgroundColor, prizeHeadColor }) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      totobingo: file(relativePath: { eq: "b9.svg" }) {
        relativePath
      }
    }
  `)
  let image = data.totobingo.relativePath
  let wins = [10, 20, 30, 40, 50, 60]
  let win15 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
  let color = "#49C765"
  let tableHeaders1 = ["Vendida En Procincia", "Localidad", "Agencia"]
  let tableData1 = [
    {
      rowData: ["Cordoba", "San Francisco", "001124"],
    },
  ]
  let tableHeaders2 = ["Categoria", "# De Ganadores", "Premio A C/U"]
  let tableData2 = [
    {
      rowData: ["12 aciertos", "Vacante", "$110000"],
    },
    {
      rowData: ["12 aciertos", "9", "115000"],
    },
    {
      rowData: ["12 aciertos", "1036", "11000"],
    },
    {
      rowData: ["12 aciertos", "0", "14000"],
    },
    {
      rowData: ["12 aciertos", "1036", "110000"],
    },
    {
      rowData: ["Bolilla Estrada", "0", "110000"],
    },
  ]
  let sort = { sorteo: "1", Fetcha: "1,000,000" }
  return (
    <div className={classes.root} id={"bronco-section"}>
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
          style={{ backgroundColor: "transparent" }}
        >
          <img
            className={classes.brinco}
            src={require(`../../images/${image}`)}
            alt={image}
          />

          <div className={classes.hoveredSort}>
            <div className={classes.sortCont}>
              Sorteo:
              <br /> {sort.sorteo}
            </div>
            <div className={classes.sortCont}>
              Fetcha: <br /> 19/01/2020
            </div>
          </div>
        </div>
        <div className={classes.greenContainer}>
          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Gana o Gana
            </Typography>
          </div>
          <div className={classes.numRow}>
            {wins.map((a, i) => {
              return (
                <div
                  style={{
                    flexBasis: "13%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div className={classes.num}>{a}</div>
                </div>
              )
            })}
          </div>
          <h2 className={classes.centerContainer}>Juego 1</h2>
        </div>
        {sort && (
          <div className={classes.sort}>
            <span className={classes.sortSpan}>Cant. de ganadores:</span>
            <strong
              className={classes.sortStrong}
              style={{
                backgroundColor: sort.color ? `${sort.color}` : `${color}`,
              }}
            >
              {sort.sorteo}
            </strong>{" "}
            <span className={classes.sortSpan}>Premio C/U:</span>
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
        <div style={{ padding: "0 1rem", marginTop: "20px" }}>
          <Table headers={tableHeaders1} data={tableData1} color={color} />
        </div>
        <div className={classes.Premiados}>
          <Typography
            variant="h4"
            component="h3"
            className={classes.PremiadosHeading}
            style={{ color: "#000" }}
          >
            Sorteo por Numero de Billete Premios Semanales
          </Typography>
        </div>

        <div className={classes.detailsCont}>
          <div className={classes.row}>
            <div
              className={classes.col}
              style={{
                flexBasis: "50%",
                borderRight: `2px solid ${color}`,
                color: color,
              }}
            >
              Premio
              <div className={classes.value}>Motociceta 1 km</div>
            </div>
            <div
              className={classes.col}
              style={{
                flexBasis: "50%",
                color: color,
              }}
            >
              # Billete
              <div className={classes.value}>546576</div>
            </div>
          </div>
          <div
            className={classes.row}
            style={{ borderTop: `2px solid ${color}` }}
          >
            <div
              className={classes.col}
              style={{
                flexBasis: "50%",
                borderRight: `2px solid ${color}`,
                color: color,
              }}
            >
              Localidad
              <div className={classes.value}>Rafael Castillo</div>
            </div>
            <div
              className={classes.col}
              style={{
                flexBasis: "50%",
                color: color,
              }}
            >
              Agencia
              <div className={classes.value}>546576</div>
            </div>
          </div>
        </div>

        <div className={classes.greenContainer}>
          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Pozo Millonarioa
            </Typography>
          </div>
          <div className={classes.star}>
            <div className={classes.numRow}>
              {win15.map((a, i) => {
                return (
                  <div
                    style={{
                      flexBasis: "20%",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <div className={classes.num}>{a}</div>
                  </div>
                )
              })}
            </div>
            <div style={{ flexBasis: "30%", textAlign: "center" }}>
              <p className={classes.rotateText}>
                Bolilla <br />
                Estrella
              </p>
              <div className={classes.starContainer}>
                <span
                  style={{ position: "relative", top: "30%", left: "25%" }}
                  className={classes.singleNum}
                >
                  06
                </span>
              </div>
            </div>
          </div>
          <h2 className={classes.centerContainer}>Juego 1</h2>
        </div>
        <div style={{ padding: "0 1rem", marginTop: "20px" }}>
          <Table headers={tableHeaders2} data={tableData2} color={color} />
        </div>

        <div className={classes.detailsCont}>
          <div className={classes.row} style={{ color: color }}>
            <div className={classes.col} style={{ flexBasis: "100%" }}>
              El billete ganador del pozo millonario pertenese al reparto
              <div className={classes.value}>Vacante</div>
            </div>
          </div>
          <div
            className={classes.row}
            style={{ borderTop: `2px solid ${color}`, color: color }}
          >
            <div
              className={classes.col}
              style={{ borderRight: `2px solid ${color}`, color: color }}
            >
              Number
              <div className={classes.value}>#1152</div>
            </div>
            <div
              className={classes.col}
              style={{ borderRight: `2px solid ${color}`, color: color }}
            >
              Fecha
              <div className={classes.value}>#1152</div>
            </div>
            <div className={classes.col}>
              Color
              <div className={classes.value}>#1152</div>
            </div>
          </div>
        </div>

        <div className={classes.detailsCont}>
          <div className={classes.row} style={{ color: color }}>
            <div className={classes.col} style={{ flexBasis: "100%" }}>
              Los Premios Se Cobran Hasta El Dia:
              <div className={classes.value}>29/12/2020</div>
            </div>
          </div>
          <div
            className={classes.row}
            style={{
              borderTop: `2px solid ${color}`,
              color: color,
            }}
          >
            <div
              className={classes.col}
              style={{
                flexBasis: "50%",
                borderRight: `2px solid ${color}`,
                color: color,
              }}
            >
              Escribano
              <div className={classes.value}>Llanes, Gabriella</div>
            </div>
            <div
              className={classes.col}
              style={{ flexBasis: "50%", color: color }}
            >
              Jefe de Sorteo
              <div className={classes.value}>Cagnetta Maria Victoria</div>
            </div>
          </div>
        </div>

        <div
          className={classes.Pozo}
          style={{
            backgroundColor: "#FD7D1B",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            className={classes.PremiadosHeading}
            style={{ color: prizeHeadColor ? prizeHeadColor : "white" }}
          >
            Monte El Premios Estimados Para El Proximo Sorteo
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FD7D1B",
              border: "1px solid #fff",
              paddingBottom: "15px",
              boxShadow: "none",
            }}
            className={classes.Btn}
          >
            $ 215.000.000
          </Button>
        </div>
      </div>
      <div className={classes.icons}>
        <Icons />
      </div>
    </div>
  )
}

export default LiveStream
