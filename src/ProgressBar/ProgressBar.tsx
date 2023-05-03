import React from 'react';
import clsx from 'clsx';
import {default as MUILinearProgress} from '@material-ui/core/LinearProgress';
import { makeStyles } from '../makeStyles';

import Typography from '@material-ui/core/Typography';
import {LinearProgressProps} from "@material-ui/core/LinearProgress/LinearProgress";

export interface IProgressBar extends LinearProgressProps {
  value: number;
  target?: number | undefined;
  targetTitle?: string;
  direction?: "left" | "right";
  valuePosition?: "left" | "right";
  small?: boolean;
  labelColor?: string;
  progressColor?: string;
  containerClassName?: string;
  valueNextToBar?: any;
}

const useStyles = (value: number, target: number | undefined, progressColor: string | undefined, direction: "left" | "right" | undefined) => makeStyles((theme) => ({
  barColorPrimary: {
    background: target && value >= target
      ? theme.palette.primary.main
        : "#E60278",
    borderRadius: 5,
  },
  root: {
    height: 8,
    borderRadius: 5,
    width: '100%',
    transform: direction === "right" ? "rotate(180deg)": "rotate(0deg)",
    
    border: `1px solid #E0E0E0`,
  },
  colorPrimary: {

    background: "#F5F5F5",
  },
  bar: {
    backgroundColor: progressColor ?
      `${progressColor}!important` :
      '',
  },
}));

const useCustomStyles = (small: boolean | undefined, labelColor: string | undefined, valuePosition: "left" | "right" | undefined, direction: "left" | "right" | undefined) => makeStyles((theme) => ({
  percents: {

    color: labelColor || "#ADADAD",
    fontWeight: 500,
    fontSize: 18,
    padding: 0,
    minWidth: small ? 45 : 50,
    textAlign: "start",
    [theme.breakpoints.down('sm')]:{
      fontSize: 14,
    },
  },
  target: {
    
    color: "#ADADAD",
    fontSize: 14,
    marginBottom: theme.spacing(0.5),
    '& span': {
      [theme.breakpoints.down('sm')]:{
        fontSize: 12,
      },
      
      color: "#2C2C2C",
      fontWeight: 600,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: valuePosition === 'left' ? 'row-reverse' : 'row',
  },
  small: {
    fontSize: 14,
    [theme.breakpoints.down('sm')]:{
      fontSize: 12,
    },
  },
  bar: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    textAlign: direction,
  },
}));

export const ProgressBar = (
  {
      value,
      target,
      targetTitle,
      small,
      containerClassName,
      valuePosition,
      labelColor,
      progressColor,
      valueNextToBar,
      direction,
  }: IProgressBar) => {
  const classes = useStyles(value, target, progressColor, direction)();
  const customClasses = useCustomStyles(small,labelColor, valuePosition, direction)();

  function renderTargetValue() {
    return target && (
      <Typography
        className={customClasses.target}
        component="div"
      >
        {`${targetTitle}: `}
        <span>{`${target}%`}</span>
      </Typography>
    );
  }

  return(
    <div className={clsx(customClasses.container, containerClassName)}>
      <div className={customClasses.bar}>
        {renderTargetValue()}
        {/*@ts-ignore*/}
        <MUILinearProgress
            classes={classes}
            value={value}
            style={{transform:direction === "right"? "rotate(180deg)": "rotate(0deg)"}}
            variant={"determinate"}
        />
      </div>
      <Typography
        className={clsx(customClasses.percents, {[customClasses.small]: small})}
        component="span"
      >
        {valueNextToBar !== null ? valueNextToBar : `${value}%`}
      </Typography>
    </div>
  )
};

export default ProgressBar;
