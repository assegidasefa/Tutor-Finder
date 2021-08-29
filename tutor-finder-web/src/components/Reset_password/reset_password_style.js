import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    // },
    paper: {
        height: "45vh",
        width: 450,
        padding: 10,
        margin: "5% auto",
    },
    textsize: {
        margin: "2px"
    },
    typography: {

        fontSize: 12,
        margin: theme.spacing(1)
    },
    gridiconstyle: {
        direction: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }

}));
