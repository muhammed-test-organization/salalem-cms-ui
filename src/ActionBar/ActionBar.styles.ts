import {makeStyles} from "../makeStyles";

const ActionBarStyles = (isExpanded: boolean) => makeStyles((theme) => ({
    root: {
        display: 'grid',
    },
    container: {
        borderBottom: isExpanded ? `1px solid #70BF90` : `1px solid #EEEEEE`,
        position: 'relative',
    },
    control: {
        position: 'absolute',
        bottom: -15,
        right: 50,
        transform: 'translateY(-50%)',
        display: 'flex',
        gap: theme.spacing(1),
    },
    floatingButton: {
        padding: '10px',
        borderRadius: '50%',
        color: 'white',
        cursor: 'pointer',
        fontSize: 15,
        boxSizing: 'content-box',
    },
    addButton: {
        background: '#70BF90',
    },
    clearButton: {
        background: '#F45671',
    },
    arrowDropDown: {
        color: "#E0E0E0",
        position: 'absolute',
        bottom: -25,
        right: 10,
        transform: 'translateY(-50%)',
        display: 'flex',
        fontSize: 35,
        gap: theme.spacing(1),
        '&:hover': {
            cursor: 'pointer',
        }
    },
    arrowDropUp: {
        color: theme.palette.primary.main,
        position: 'absolute',
        bottom: -25,
        right: 10,
        transform: 'translateY(-50%)',
        display: 'flex',
        fontSize: 35,
        gap: theme.spacing(1),
        '&:hover': {
            cursor: 'pointer',
        }
    }
}));

export default ActionBarStyles;