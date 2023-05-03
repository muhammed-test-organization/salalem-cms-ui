import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '../makeStyles';
import {Done, Clear} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';

export interface IContainerWithActions {
    title?: string;
    children: React.ReactNode;
    className?: string;
    onAdd: () => void;
    onDelete: () => void;
    insideButtons?: boolean;
    disableButtons?: boolean;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
    },
    container: {
        background: 'white',
        border: '1px solid #DDDDDD',
        boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.15)',
        borderRadius: 2,
        padding: `${theme.spacing(4)}px ${theme.spacing(6)}px`,
        marginTop: theme.spacing(1),
        position: 'relative',
    },
    control: {
        position: 'absolute',
        right: 50,
        transform: 'translateY(-50%)',
        display: 'flex',
        gap: theme.spacing(1),
    },
    floatingButton: {
        padding: '5px',
        borderRadius: '50%',
        color: 'white',
        cursor: 'pointer',
        fontSize: 20,
        boxSizing: 'content-box',
    },
    addButton: {
        background: '#70BF90',
    },
    clearButton: {
        background: '#F45671',
    },
}));

export const ContainerWithActions = ({title, children, onAdd, onDelete, className, insideButtons, disableButtons}: IContainerWithActions) => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.root, className)}>
            <Typography variant={'caption'} color="textSecondary">
                {title}
            </Typography>
            <div className={classes.container}>
                {children}

                {!disableButtons && <div style={insideButtons? {bottom: -5} : {top: 0}} className={classes.control}>
                    {insideButtons? <Done className={clsx(classes.floatingButton, classes.addButton)} onClick={onAdd} /> : <Done className={clsx(classes.floatingButton, classes.addButton)} onClick={onAdd} />}
                    <Clear className={clsx(classes.floatingButton, classes.clearButton)} onClick={onDelete} />
                </div>}
            </div>
        </div>
    );
}

export default ContainerWithActions;