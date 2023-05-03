import React, { useState } from 'react';
import clsx from "clsx";
import { makeStyles } from '../makeStyles';
import Grid from "@material-ui/core/Grid";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { Chip, Collapse } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export interface IInfoDialog {
  onDeleteClick?: ()=> void;
  closable?: boolean;
  title: string;
  description?: string;
  arrowPosition?: 'top'| 'left'| 'right'| 'bottom';
  chipLabel?: string;
  alwaysClosed?: boolean;
  onClick?: () => void;
  className?: React.ReactNode;
}


const useStyles = (isOpen: boolean) => makeStyles((theme) => ({
  root: {
    
    background: "#EEEEEE",
    borderRadius: isOpen ? '20px 20px 0 0' : 20,
    transition: `border-radius ${isOpen ? '0s 0s' : '.1s .2s'} linear`,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    position: 'relative'
  },
  smallContainer: {
    display: 'flex',
    width: 'fit-content',
    maxWidth: '100%',
    justifyContent: 'space-between',
    alignItems: "center",
    boxSizing: 'border-box'
  },
  headerContainer: {
    flexWrap: 'nowrap'
  },
  HeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 100%', 
    overflow: 'hidden'
  },
  chip: {
    background: 'white',
    height: '22px'
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  content: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
  },
  closableContent: {
    padding: `0 ${theme.spacing(3.5)}px ${theme.spacing(2)}px`,
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    
    background: "#EEEEEE",
    borderRadius: '0 0 20px 20px',
    zIndex: 2
  },
  icon: {
    
    color: "#757575",
    cursor: 'pointer',
    '&:hover': {
      
      color: "#ADADAD",
    },
    fontSize: '20px'
  },
  arrowIcon: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(-1),
  },
  closeIcon: {
    marginLeft: theme.spacing(1),
  },
  headerContent: {
    display: 'inline-block',
    alignItems: 'center',
    flex: '1 1 100%',
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: 15,
  },
  tip: {
    position: 'absolute',
    width: 0,
    height: 0,
  }
}));

const useArrowStyles = makeStyles(() => ({
  left: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    
    borderRight: `10px solid #EEEEEE`,
  },
  right: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    
    borderLeft: `10px solid #EEEEEE`,
  },
  top: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    
    borderBottom: `10px solid #EEEEEE`,
  },
  bottom: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    
    borderTop: `10px solid #EEEEEE`,
  },
}));

export const InfoDialog = (
    {
      onClick,
      onDeleteClick,
      arrowPosition,
      chipLabel,
      alwaysClosed,
      closable,
      description,
      title,
      className
    }: IInfoDialog) => {

  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles(isOpen)();
  const tipClasses = useArrowStyles();

  const handleArrowClick = () => setIsOpen(!isOpen)

  const renderContent = () => (
    <Typography style={{fontSize: 15}}>
      <span className={classes.title}>
        {title}
      </span>
      &nbsp;
      {description}
    </Typography>
  )

  const renderCloseIcon = () =>  (
    <HighlightOffIcon 
      className={clsx(classes.icon, classes.closeIcon)} 
      viewBox='2 2 20 20'
      onClick={(e)=>{
        e.stopPropagation();
        if (onDeleteClick) {
          onDeleteClick()
        }
      }}
    />
  )

  const renderArrowIcon = () => {
    const Component = isOpen ? KeyboardArrowUp : KeyboardArrowDown
    return (
      <Component
        className={clsx(classes.icon, classes.arrowIcon)}
        onClick={handleArrowClick}
      />
    )
  }

  const renderFullDialog = () => (
    <Grid container className={clsx(classes.root, className)} onClick={onClick}>
      {arrowPosition && <div className={clsx(classes.tip, tipClasses[arrowPosition])}/>}
      <Grid container className={classes.headerContainer}>
        {closable && !alwaysClosed && renderArrowIcon()}
        <div className={classes.HeaderLeft}>
          {(!closable || isOpen) && chipLabel && <Chip className={classes.chip} label={chipLabel}/>}
          {(closable && !isOpen) ? (
            <Typography className={classes.headerContent} title={`${title}: ${description}`}>
              <span className={classes.title}>
                {title}
              </span>
              &nbsp;
              {description}
            </Typography>
          ) : null}
        </div>
        {onDeleteClick && renderCloseIcon()}
      </Grid>
      {closable ? (
        <Collapse in={isOpen} timeout="auto" unmountOnExit className={classes.closableContent}>
          {renderContent()}
        </Collapse>
      ) : (
        <div className={classes.content}>
          {renderContent()}
        </div>
      )}
    </Grid>
  );

  const renderSmallDialog = () => (
    <div className={clsx(classes.root, classes.smallContainer, className)}>
      <Typography className={classes.headerContent} title={title}>{title}</Typography>
      {onDeleteClick && renderCloseIcon()}
    </div>
  )

  return (
    description ? (renderFullDialog()) : (renderSmallDialog())
  )
};

export default InfoDialog;