import { makeStyles } from "@material-ui/core/styles";
import homepic from "../../assets/images/learn.svg";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    minHeight: "70vh",
    background: `url(${homepic})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 30px;",
    display: "flex",
    // backgroundPosition: "99% 10%"
    // backgroundOrigin: "content-box"

  },
  header: {
    paddingLeft: "100px",
    minHeight: "100%"
  },
  headerText: {
    color: "#063970",
    fontWeight: "bold",
    fontSize: "50px",

  },
  services: {
    color: "#063970",
    fontSize: "35px",
    paddingTop: "150px"
  },
  three: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "70px"
    //   alignItems: "center",

  },
  one: {
    paddingRight: "300px",
    paddingTop: "0px",
    //   paddingLeft: "-100px"

  },
  two: {
    alignItems: "center",
    paddingRight: "250px"
  },
  photo1: {

    width: "40px",
    Height: "40px"
  },
  photo2: {
    alignItems: 'center',
    width: "40px",
    Height: "40px",
    paddingLeft: "0px"
  },
  photo3: {
    paddingLeft: "300px",
    width: "40px",
    Height: "40px"


  }
}));
