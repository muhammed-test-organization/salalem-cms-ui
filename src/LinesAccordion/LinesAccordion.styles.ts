import { makeStyles } from '../makeStyles';

const LinesAccordionUseStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
    },
    row: {
        marginBottom: theme.spacing(3),
        position: 'relative',
        height: 30,
        zIndex: 10,
    },
    smallRow: {
        marginBottom: theme.spacing(1.5),
        position: 'relative',
        zIndex: 10,
    },
    title: {
        display: 'box',
        '-webkit-line-clamp': 1,
        '-webkit-box-orient': "vertical",
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '95%',
        marginRight: 25,
        '& *': {
            margin: 0,
        }
    },
    clickableRow: {
        cursor: 'pointer',
        '&:hover': {
            '& span': {
                color: "#757575",
            },
        },
    },
    rowInfo: {
        position: 'relative',
        
        borderBottom: `1px solid #E0E0E0`,
        
        color: "#000000",
        marginLeft: 20,
        '&:after': {
            content: '""',
            position: 'absolute',
            background: theme.palette.primary.main,
            height: 1,
            left: 0,
            right: 0,
            top: '100%',
            opacity: 0,
            transition: 'opacity 0.5s ease',
        }
    },
    openRowInfo: {
        '&:after': {
            opacity: 1,
        },
    },
    smallRowInfo: {
        
        color: "#000000",
        marginLeft: 7,
        fontSize: 20,
    },
    subContainer: {
        position: 'relative',
        padding: '0 50px',
    },
    arrowIcon: {
        
        color: "#DADADA",
        fontSize: 35,
        transition: 'transform 0.7s cubic-bezier(0.33, 1, 0.68, 1)',
    },
    arrowIconFlipped: {
        transform: 'scaleY(-100%)',
        color: theme.palette.primary.main,
    },
    icon: {
        position: 'relative',
        minWidth: 22,
        minHeight: 22,
        zIndex: "auto",
        
        background: "#ADADAD",
        
        borderColor: "#ADADAD",
        borderRadius: '50%',
        
        color: "#FFFFFF",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& svg': {
            fontSize: 16
        },
    },
    subIcon: {
        minWidth: 17,
        minHeight: 17,
        
        background: "#E0E0E0",
        
        borderColor: "#E0E0E0",
        
        color: "#757575",
        '& svg': {
            fontSize: 14
        },
    },
    doneIcon: {
        background: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
    },
    doneSubIcon: {
        background: '#AFDABE',
        borderColor: '#AFDABE',
        
        color: "#FFFFFF",
    },
    doneLastLevelIcon: {
        background: '#DFEFE3',
        borderColor: '#DFEFE3',
        
        color: "#FFFFFF",
    },
    lastLevelIcon: {
        minWidth: 25,
        minHeight: 25,
        '& svg': {
            fontSize: 18
        },
    },
    openIcon: {
        content: '""',
        position: 'absolute',
        border: '2px solid transparent',
        borderColor: 'inherit',
        margin: -4,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: '50%',
        opacity: 0,
        transition: 'opacity 0.5s ease',
    },
    showOpenIconCircle: {
        opacity: 1,
    },
    line: {
        position: 'absolute',
        width: 2,
        left: -40,
        top: -4,
        bottom: 4,
        
        background: "#DADADA",
    },
    iconLine: {
        position: 'absolute',
        height: 32,
        width: 2,
        top: 15,
        
        background: "#DADADA",
        zIndex: -1
    },
    lastLevelLine: {
        left: -42,
    },
    noSubParentLastLevelLine: {
        left: -40,
    },
    shape: {
        position: 'absolute',
        top: -31,
        left: -40,
        '&:after': {
            content: '""',
            position: 'absolute',
            height: 20,
            width: 20,
            top: 27,
            borderBottom: `2px solid #DADADA`,
            borderLeft: `2px solid #DADADA`,
            borderRadius: '0 0 0 100%',
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 45,
            left: 19,
            height: 2,
            width: 30,
            
            background: "#DADADA",
        },
    },
    lastLevelShape: {
        top: -33,
        left: -42,
    },
    noSubParentShape: {
        left: -40
    },
    extraData: {
        whiteSpace: 'nowrap',
    }
}));

export default LinesAccordionUseStyles;