import { makeStyles } from '../makeStyles';

const LOSQuestionUseStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        
        border: `1px solid #E0E0E0`,
        borderRadius: 2,
        padding: '14px 19px',
        minHeight: '70px',
        flexWrap: 'nowrap',
        boxSizing: 'border-box',
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap'
        },
        '&:hover': {
            
            borderColor: "#ADADAD",
        },
    },
    questionContainer: {
        display: 'flex',
        
        color: "#000000",
        '& p':{
            display: 'contents',
        },
    },
    question: {
        marginLeft: theme.spacing(1)
    },
    extraDataContainer: {
        justifyContent: 'space-between',
    },
    extraData: {
        
        color: "#ADADAD",
        width: 100,
        flex: '1 1 auto',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'start',
            minWidth: '50%'
        },
    },
    difficulty: {
        display: 'flex',
        flexWrap: 'nowrap',
        
        color: "#ADADAD",
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-end',
            minWidth: '50%'
        },
        '& img': {
            marginRight: 5,
            width: '1.2em',
            height: '1.2em',
        }
    },
    collapse: {
        width: '100%',
    },
    questionContent: {
        padding: `0 ${theme.spacing(4)}px ${theme.spacing(1)}px`
    },
    actionsContainer: {
        margin: `${theme.spacing(1)}px 0`
    },
    losLabel: {
        alignSelf: 'center',
    },
    icon: {
        fontSize: '35px !important',
        
        color: "#FFFFFF",
        padding: theme.spacing(1),
        borderRadius: 25,
        cursor: 'pointer',
        transition: 'transform 0.2s ease-out',
        '&:hover': {
            transform: 'scale(1.15)',
        }
    },
    deleteIcon: {
        background: '#f4627c',
    },
    editIcon: {
        background: theme.palette.primary.main,
        marginRight: theme.spacing(1)
    },
    LOSTitle: {
        
        color: "#ADADAD",
        marginRight: 'auto',
        fontSize: 18,
    },
    chip: {
        padding: theme.spacing(1),
        '&:hover': {
            cursor: 'pointer',
        },
    },
    answers: {
        marginTop: theme.spacing(1)
    },
    answer: {
        
        borderBottom: `1px solid #E0E0E0`,
        
        color: "#757575",
        padding: `${theme.spacing(1.5)}px ${theme.spacing(7)}px ${theme.spacing(1)}px ${theme.spacing(1.5)}px`,
        margin: `${theme.spacing(0.5)}px 0`,
        borderRadius: 2,
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
        },
        '& p':{
            display: 'contents',
        },
    },
    correctAnswer: {
        color: "#70BF90"
    },
    correctAnswerIcon: {
        
        color: "#40C173",
        marginLeft: 'auto',
    },
    index: {
        marginRight: theme.spacing(4),
        fontSize: 18,
    },
    arrowIcon: {
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        
        color: "#ADADAD",
        '& svg': {
            fontSize: 32
        }
    }
}));

export default LOSQuestionUseStyles