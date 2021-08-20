import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    media: {
        height: "100%",
        width: "100%",
        // objectFit:"contain"
    },
    avater: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }

}));
