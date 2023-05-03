import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import colors from '../colors';

import clsx from 'clsx';
import { IDescriptionBoxComponentProps } from '../LOSCreationBox.interface';
import TextField from "../../TextField/TextField";

const useStyles = makeStyles((theme) => ({
  title: {
    color: colors.darkGray,
    marginLeft: theme.spacing(2),
  },
  descriptionWrapper: {
    border: `1px solid #EEEEEE`,
    borderRadius: 2,
    '& .TextField-styles__container--3xsTJ': {
      width: '100% !important',
      border: '1px solid #EEEEEE',
    },
    '& fieldSet': {
      border: 'none !important',
    },
    height: '100%'
  },
  losTextField: {
    height: '100%',
    '& .MuiInputBase-inputMultiline': {
      padding: '18.5px 14px',
      // TODO: MUITextField.textarea element has inline style that has a static height, which is why we added !important. Needs investigation
      height: '100% !important'
    },
    '& .MuiInputBase-multiline': {
      height: '100%'
    },
    // Below classes override the built in MUI input borders
    // TODO: refactor to something better?
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 'none'
    },
    '& .MuiInput-underline:before': {
      borderBottom: 'none'
    },
    '& .MuiInput-underline:after': {
      borderBottom: 'none'
    },
  },
}));

function DescriptionBox({
  t,
  description,
  onChange,
  hasSubmitted,
}: IDescriptionBoxComponentProps) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>{`3. ${t(
        'Description'
      )} *`}</Typography>
      <div
        className={clsx(classes.descriptionWrapper)}
      >
        <TextField
          errorText={
            (hasSubmitted && !description.trim())
              ? t('Please fill required fields')
              // False returns no error
              : ''
          }
          multiline
          placeholder={`${t('LOS Description')} *`}
          className={classes.losTextField}
          value={description?.replace(/<\/?[^>]+(>|$)/g, '')}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default DescriptionBox;
