import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MUITextField from '@material-ui/core/TextField';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {ITextField} from "./TextField.interface";

const useStyles = (backgroundColor: string | undefined, _backgroundColor1: string | undefined, limit: number | undefined, StartIcon: undefined, EndIcon: undefined) => makeStyles((theme) => ({
  root: {
    color: '#2C2C2C',
    backgroundColor: backgroundColor ? backgroundColor : '#fff',
    '& input + fieldset': {
      borderWidth: 1,
      borderColor: '#DADADA',
    },
    '& .MuiInputBase-input': {
      color: '#2C2C2C'
    },
    '& .MuiInputLabel-root': {
      color: '#ADADAD'
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#ADADAD',
      },
      '&.Mui-focused:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-error': {
        '& fieldset': {
          borderColor: '#E60278',
        },
        '&:hover fieldset': {
          borderColor: '#E60278',
        },
      },
      '&.Mui-disabled': {
        '& fieldset': {
          borderColor: '#EEEEEE',
        },
        '&:hover fieldset': {
          borderColor: '#EEEEEE',
        },
      },
    },
    '&:after': {
      position: 'absolute',
      content: limit && '""',
      top: -1,
      right: 6,
      width: 40,
      height: 3,
      backgroundColor: 'white',
      zIndex: 9,
    },
  },
  limit: {
    width: 40,
    position: 'absolute',
    top: -10,
    right: 6,
    fontWeight: 'bold',
    zIndex: 10,
    textAlign: 'center'
  },
  container: {
    position: 'relative',
    height: '100%',
    display: 'grid',
    '& .MuiInputBase-input':{
      paddingLeft: !!StartIcon? '35px': undefined,
      paddingRight: !!EndIcon? '35px': undefined,
    }
  },
  withSuccess: {
    borderColor: '#86D1A5 !important',
  },
  helpText: {
    position: 'absolute',
    top: '-25px',
    right: '0px',
    color: '#4A96DC',
    cursor: 'pointer',
    fontSize: '16px',
  },
  statusMessage: {
    display: 'flex',
    alignItems: 'center',
    height: '42px',
    padding: '0 6px',
    width: '100%',
    color: 'white',
    boxSizing: 'border-box',
    borderRadius: '0 0 2px 2px',
    '&.p':{
      fontSize: '0.9rem'
    },
  },
  statusText: {
    margin: '0 10px !important',
  },
  error: {
    backgroundColor: '#F4527C',
  },
  success: {
    backgroundColor: '#86D1A4',
  },
  inputSuccess: {
    borderColor: '#86D1A5',
  },
  test: {
    color: 'red',
  },
  bottomText: {
    marginLeft: '5px',
  },
  iconRight: {
    '&.small':{
      paddingLeft: '40px',
    },
    '&.medium':{
      paddingLeft: '56px',
    },
  },
  iconLeft: {
    '&.small':{
      paddingRight: '40px',
    },
    '&.medium':{
      paddingRight: '56px',
    },
  },
  small: {
    fontSize: '30px',
  },
  medium: {
    fontSize: '46px',
  },
  icon: {
    position: 'absolute',
    top: '0',
    margin: '5px',
    fill: '#ADADAD',
  },
  left: {
    justifySelf: 'flex-start'
  },
  right: {
    justifySelf: 'flex-end'
  }
}));

const TextField = ({value, helpText, limit, errorText, successText, onHelpClick, bottomText, size, StartIcon, startIconProps, EndIcon, endIconProps, backgroundColor, className, rows, rowsMax, multiline, label, placeholder, onChange, variant}: ITextField) => {

  const classes = useStyles(successText, backgroundColor, limit, StartIcon, EndIcon )();

  const inputProps = {
    value,
    size,
    classes,
    fullWidth: true,
    inputProps: { maxLength: limit },
    // custom props
    error: !!errorText,
    className: clsx(
      className,
      {
        [classes.medium]: !!size && size === 'medium',
        [classes.small]: !!size && size === 'small',
        [classes.iconLeft]: !!EndIcon,
        [classes.iconRight]: !!StartIcon,
        [classes.withSuccess]: !!(successText),
      },
    ),
    rows,
    rowsMax,
    multiline,
    label,
    placeholder
  };

  const getStatusText = () => (
    <Box className={clsx(classes.statusMessage, { [classes.error]: errorText, [classes.success]: successText })}>
      {errorText ? <ErrorOutlineIcon /> : <CheckCircleOutlineIcon />}

      <Typography className={classes.statusText}>
        {errorText || successText}
      </Typography>
    </Box>
  );

  return (
    <Box className={classes.container}>
      {!!helpText && <Typography className={classes.helpText} onClick={onHelpClick}>{helpText}</Typography>}
      {!!limit && <Typography className={classes.limit}>{limit}</Typography>}

      <MUITextField {...inputProps} onChange={onChange} variant={variant}/>
      {!!StartIcon && <StartIcon className={clsx(classes.left, classes.icon, {[classes.medium]: !!size && size === 'medium', [classes.small]: !!size && size === 'small'})} {...startIconProps} />}
      {!!EndIcon && <EndIcon className={clsx(classes.right, classes.icon, {[classes.medium]: !!size && size === 'medium', [classes.small]: !!size && size === 'small'})} {...endIconProps}/>}

      {!!errorText || !!successText ? getStatusText() : false}

      {!!bottomText && <Typography className={classes.bottomText}>{bottomText}</Typography>}
    </Box>
  );
};

export default TextField;
