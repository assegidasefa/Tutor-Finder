import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    // },
    paper: {
        height: "90vh",
        width: 450,
        padding: 10,
        margin: "5% auto",
    },
    avater: {
        margin: "30px auto",
        backgroundColor: theme.palette.secondary.main,

    },
    textsize: {
        margin: "2px"
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    typography: {

        fontSize: 12,
        margin: theme.spacing(1)
    },
    margin: {
        // margin: theme.spacing(1),
        margin: "20px auto"
        

    },
    textField: {
        // width: '25ch',
        width: '100%'
    },
    gridiconstyle: {
        direction:"row",
        justifyContent:"space-around",
        alignItems:"center"
    }

}));
