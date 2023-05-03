import React, {useState} from 'react';
import clsx from 'clsx';
import {Edit, Delete, ArrowDropDown, ArrowDropUp} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import LinesAccordion from "../LinesAccordion/LinesAccordion";
import {IChapter} from "./ActionBar.interface";
import ActionBarStyles from "./ActionBar.styles";

export const ActionBar = ({title, onEdit, onDelete, className, content}: IChapter) => {
    const [showButtons, setShowButtons] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const classes = ActionBarStyles(isExpanded)();
    return (
        <div
            className={clsx(classes.root, className)}
            onMouseEnter={() => {
                 setShowButtons(true);
            }}
            onMouseLeave={() => {
                setShowButtons(false);
            }}
        >
            {!isExpanded ? <div className={classes.container}>
                <Typography variant={'caption'} color="textSecondary">
                    {title}
                </Typography>
                {showButtons && <div className={classes.control}>
                    <Edit className={clsx(classes.floatingButton, classes.addButton)} onClick={onEdit} />
                    <Delete className={clsx(classes.floatingButton, classes.clearButton)} onClick={onDelete} />
                </div>}
                {!isExpanded && <ArrowDropDown className={classes.arrowDropDown} onClick={()=>{setIsExpanded(true)}} />}
                {isExpanded && <ArrowDropUp className={classes.arrowDropUp} onClick={()=>{setIsExpanded(false)}} />}
            </div>:
                <LinesAccordion
                    content={content}
                    isFirstOpen={true}
                    onCloseFirst={()=>{
                        setIsExpanded(false)
                    }}
                />
            }
        </div>
    );
}

export default ActionBar;