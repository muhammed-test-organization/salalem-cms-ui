import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '../makeStyles';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Typography from '@material-ui/core/Typography';
import { MuiTheme } from "../MuiThems";
import clsx from "clsx";

export interface IChip {
  title?: string;
  text?: string;
  label?: string;
  textColor?: MuiTheme;
  fontSize?: number;
  big?: boolean;
  isClickable?: boolean;
  isSelected?: boolean;
  tagClass?: string;
  bgcolor?: "lightGreen" | "lightBlue" | "gray" | "lightRed";
}

const backgroundColors = {
  lightGreen: "#DFEFE3",
  lightBlue: "#E2F2FA",
  gray: "#EEEEEE",
  lightRed: "#FDE0E5",
}

const textColors = {
  lightGreen: "#9ED155",
  lightBlue: "#A3EAEA",
  gray: "#ADADAD",
  lightRed: "#F45671",
}
const useStyles = (big: boolean | undefined, isClickable: boolean | undefined, isSelected: boolean | undefined, textColor: MuiTheme | undefined, _isBoldFont: boolean | undefined, fontSize: number | undefined, bgcolor: "lightGreen" | "lightBlue" | "gray" | "lightRed" | undefined) => makeStyles(() => ({
  root: {
    padding: big && '1.8rem',
    borderRadius: big && '80px / 80px',
    background: isClickable? "#F3F9F2" : isSelected ? "#ADADAD" : `${backgroundColors}.${bgcolor}`,
    '&:focus': {
      background: isClickable && "#F3F9F2",
    },
    color: textColor ? textColor : bgcolor ? `${textColors}.${bgcolor}` : "#2C2C2C",
  },
  icon: {
    color: "#2C2C2C",
    marginRight: -6,
    marginLeft: 5,
  },
  smallChipText: {
    weight: 600,
    fontSize: big ? fontSize ? fontSize : 18 : fontSize,
  },
  loadMoreText: {
    color: "#70BF90",
    padding: 5,
    weight: 600,
    fontSize: big ? fontSize ? fontSize : 18 : fontSize,
  }
}));

const useBigStyles = makeStyles(() => ({
  root: {
    justifyContent: 'flex-start',
    height: '70px',
    background: "#FFFFFF",
    borderRadius: '2px',
    border: `1px solid #E0E0E0`,
    paddingLeft: '10px',
    paddingRight: '20px',
    '& .MuiChip-avatar': {
      width: '50px',
      height: '50px',
      marginRight: '10px',
      border: `1px solid #E0E0E0`,
    },
    '&:hover, &:focus': {
      background: "#FFFFFF",
    },
    '& .MuiChip-deleteIcon': {
      position: 'absolute',
      right: '5px',
    },
  },
}));

const useCustomStyles = makeStyles(() => ({
  title: {
    fontSize: '18px',
    color: "#2C2C2C",
    fontWeight: 600,
  },
  text: {
    color: "#ADADAD",
    margin: '-0.5em 0.1em 0.1em 0.1em',
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
  },
  label: {
    color: "#2C2C2C",
    marginRight: '10px',
    padding: 0,
  },
}));


export const CustomChip = (
    {
        title,
        text,
        label: propsLabel,
        fontSize,
        big,
        isSelected,
        isClickable,
        textColor,
        tagClass,
        bgcolor
    }: IChip
) => {
  const isBoldFont = big || isClickable;
  const classes = useStyles(big,isClickable,isSelected,textColor,isBoldFont, fontSize, bgcolor)();
  const classesBig = (title || text) && useBigStyles();
  const classesCustom = useCustomStyles();

  let label = (
        <Typography className={isClickable? classes.loadMoreText : classes.smallChipText}>
      {propsLabel}
    </Typography>
  );
  if (title || text) {
    label = (
      <div className={classesCustom.label}>
        {title && (
          <Typography
            component="div"
            className={classesCustom.title}
          >
            {title}
          </Typography>
        )}
        {text && (
          <Typography
            component="div"
            className={classesCustom.text}
          >
            {text}
          </Typography>
        )}
      </div>
    );
  }

  return (
    <Chip
      className={clsx(classes, classesBig, tagClass)}
      label={label}
      deleteIcon={<CancelOutlinedIcon />}
    />
  );
};

export default CustomChip;