import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        height: "75vh",
        width: 450,
        padding: 10,
        margin: "5% auto",


    },
//     textmargin:{
// margin
//     },
    avatar: {
        margin: "30px auto",
        backgroundColor: theme.palette.secondary.main,

    },
    typography: {
        
        fontSize: 12,
        margin:theme.spacing(2)
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    margin: {
        // margin: theme.spacing(1),
        margin: "20px auto"

    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        // width: '25ch',
        width: '100%'
    },
    RadioCheckBoxContainer:{
        
    }
}));
