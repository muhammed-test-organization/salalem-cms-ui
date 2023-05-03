import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import colors from '../colors';

import clsx from 'clsx';
import { IDomainBoxComponentProps } from '../LOSCreationBox.interface';

const useStyles = makeStyles((theme) => ({
  title: {
    color: colors.darkGray,
    marginLeft: theme.spacing(2),
  },
  domainContainer: {
    background: colors.lightGray,
    flex: 1,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    borderRadius: 2,
  },
  domain: {
    background: 'transparent',
    width: '100px',
    height: '18px',
    textAlign: 'center',
    padding: `${theme.spacing(1.4)}px 0`,
    borderRadius: '50px',
    color: colors.darkGray,
    cursor: 'pointer',
  },
  activeDomain: {
    background: colors.main,
    color: colors.white,
  },
  error: {
    border: '#f4627c 1px solid',
  },
}));

function DomainBox({
  domains,
  selectedDomain,
  onChange,
  t,
  hasSubmitted,
}: IDomainBoxComponentProps) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>{`1. ${t('Domain')} *`}</Typography>
      <div
        className={clsx(classes.domainContainer, {
          // Validation error handler
          [classes.error]: hasSubmitted && !selectedDomain.value,
        })}
      >
        {domains.map((value) => (
          <div
            key={value}
            onClick={() => onChange(value)}
            className={clsx(classes.domain, {
              // Active class handler
              [classes.activeDomain]: value === selectedDomain.value,
            })}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
}

export default DomainBox;
