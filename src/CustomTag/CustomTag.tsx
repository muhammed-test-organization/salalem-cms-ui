import React from 'react';
import {CustomChip, IChip} from '../CustomChip/CustomChip';
import { makeStyles } from '../makeStyles';

const useStyles = makeStyles(() => ({
  tagText: {
    fontWeight: '500',
    letterSpacing: '1.28px',
    textTransform: 'uppercase',
    fontSize: '12px',
  }
}));

export const CustomTag = (
    {
      big,
      text,
      textColor,
      isSelected,
      fontSize,
      title,
      label,
      isClickable,
      bgcolor
    }:IChip
) => {
  const classes = useStyles()
  return(
    <CustomChip
        label={label}
        title={title}
        big={big}
        textColor={textColor}
        text={text}
        isSelected={isSelected}
        isClickable={isClickable}
        fontSize={fontSize}
        bgcolor={bgcolor}
        tagClass={classes.tagText}/>
  );
}

export default CustomTag;