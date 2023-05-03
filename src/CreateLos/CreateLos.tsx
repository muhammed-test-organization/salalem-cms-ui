import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '../Typography/Typography';
import allDomains from './data/losCognitiveDomain';
import colors from './colors';
import DomainBox from './components/DomainBox';
import VerbBox from './components/VerbBox';
import DescriptionBox from './components/DescriptionBox';
import ContainerWithActions from "../ContainerWithActions/ContainerWithActions";
import {
  ICreateLosComponentProps,
  IRawDomain,
  ISelectedDomain,
  ISelectedVerb,
  IVerb,
} from './LOSCreationBox.interface';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  gridContainer: {
    minHeight: '450px',
    width: '65vw',
    display: 'grid',
    columnGap: theme.spacing(1),
    rowGap: theme.spacing(1),
    gridTemplateColumns: '1fr 3fr 3fr',
    gridTemplateRows: 'auto 50px',
    padding: '10px',
  },

  gridItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },

  gridItem1: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    gridRowStart: 1,
    gridRowEnd: 3,
  },

  gridItem2: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    gridColumnStart: 2,
    gridColumnEnd: 4,
    gridRowStart: 2,
    gridRowEnd: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  typography: {
    width: '100%',
    borderTop: '1px solid #E0E0E0',
    paddingTop: '15px',
  },

  domainExplanation: {
    color: colors.darkGray,
  },
}));

export function CreateLos({
  lang = 'en',
  t,
  onAdd,
  onDelete,
}: ICreateLosComponentProps) {
  const classes = useStyles();

  // Grant the translation function the value of "t" prop if it is supplied
  // else give it a function that returns the same string (as to stay consistent and not get errors)
  const _t = t
    ? t
    : (str: string | undefined) => {
        return str ? str : '';
      };

  // Get the domains of a specific language
  const requestedLangDomain = allDomains[lang];

  // Get the value (name) of the domains
  const domains = Object.keys(requestedLangDomain);

  // Initialize selected domain state
  const [selectedDomain, setSelectedDomain] = useState<ISelectedDomain>({
    value: undefined,
    explanation: undefined,
    verbs: [],
  });

  // Initialize selected verb state
  const [selectedVerb, setSelectedVerb] = useState<ISelectedVerb>(undefined);

  // Initialize LOS description state
  const [description, setDescription] = useState('');

  // Initialize "has user submitted" state, that is used to display UI errors in child components
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function setSelectedDomainHandler(domainValue: string) {
    // Get the domain by dynamically accessing the domains object
    const domain = requestedLangDomain[
      domainValue as keyof typeof requestedLangDomain
    ] as IRawDomain;

    // Get an array of strings containing verbs
    const verbs = domain.children.map((verb) => verb.title);

    // Get the value of domain's explanation
    const explanation = domain.explanation;

    // Set the selected domain
    setSelectedDomain({
      value: domainValue,
      explanation,
      verbs,
    });

    // Deselect (reset) any selected verb if selected
    selectedVerb && setSelectedVerb(undefined);
  }

  function setSelectedVerbHandler(verbValue: IVerb) {
    setSelectedVerb(verbValue);
  }

  return (
    <ContainerWithActions
      title={'Create LOS'}
      onAdd={() => {
        if (!selectedDomain.value || !selectedVerb || !description.trim())
          // Tell the component that the user clicked the submit button once, which in turn would run validation
          // functions in the child components to possibly trigger UI input errors
          setHasSubmitted(true);
        else
          // Else we call back with the LOS values as arguments
          onAdd({
            domain: selectedDomain.value,
            verb: selectedVerb,
            description,
          });
      }}
      onDelete={() => onDelete && onDelete()}
    >
      <div className={classes.gridContainer}>
        <div className={clsx(classes.flex, classes.gridItem1)}>
          <DomainBox
            domains={domains}
            selectedDomain={selectedDomain}
            t={_t}
            onChange={setSelectedDomainHandler}
            hasSubmitted={hasSubmitted}
          />
        </div>
        <div className={clsx(classes.flex, classes.gridItem)}>
          <VerbBox
            verbs={selectedDomain.verbs}
            selectedVerb={selectedVerb}
            t={_t}
            onChange={setSelectedVerbHandler}
            hasSubmitted={hasSubmitted}
          />
        </div>
        <div className={clsx(classes.flex, classes.gridItem)}>
          <DescriptionBox
            t={_t}
            description={description}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDescription(e.target.value)}
            hasSubmitted={hasSubmitted}
          />
        </div>
        <div className={clsx(classes.flex, classes.gridItem2)}>
          <div className={classes.typography}></div>
          <Typography
            customVariant="smallSemibold"
            className={classes.domainExplanation}
          >
            {_t(selectedDomain.explanation)}
          </Typography>
        </div>
      </div>
    </ContainerWithActions>
  );
}

export default CreateLos;
