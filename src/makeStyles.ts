import { makeStyles as _makeStyles } from "@material-ui/core/styles";
import { MuiTheme } from "./MuiThems";

/**
 * @param cb the makeStyles callback function
 * @summary MUI makeStyles function that has the MuiTheme interface pre-appended
 */
function makeStyles(cb: {
    // @ts-ignore
    (theme: MuiTheme)
}) {
    return _makeStyles<MuiTheme>(cb)
}

export { makeStyles }