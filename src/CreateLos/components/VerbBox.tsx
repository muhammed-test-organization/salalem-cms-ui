import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import colors from '../colors';

import clsx from 'clsx';
import { IVerbBoxComponentProps } from '../LOSCreationBox.interface';

const useStyles = makeStyles((theme) => ({
  title: {
    color: colors.darkGray,
    marginLeft: theme.spacing(2),
  },
  verbsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    overflow: 'auto',
    // Forces the container not to go beyond a certain height, therefor makes the container scrollable
    maxHeight: '400px',
    border: '1px solid #EEEEEE',
  },

  verb: {
    color: '#ADADAD',
    width: '100px',
    height: '18px',
    cursor: 'pointer',
    margin: '8px',
    padding: '11.2px 0',
    background: colors.lightGray,
    textAlign: 'center',
    borderRadius: '50px',
  },

  activeVerb: {
    background: colors.mediumGray,
  },

  error: {
    border: '1px solid #f4627c',
  },
}));

function VerbBox({
  verbs,
  selectedVerb,
  t,
  onChange,
  hasSubmitted,
}: IVerbBoxComponentProps) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>{`2. ${t('Verb')} *`}</Typography>
      <div
        className={clsx(classes.verbsWrapper, {
          [classes.error]: hasSubmitted && !selectedVerb,
        })}
      >
        {verbs.map((value) => (
          <div
            key={value}
            className={clsx(classes.verb, {
              [classes.activeVerb]: value === selectedVerb,
            })}
            onClick={() => onChange(value)}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
}

export default VerbBox;
