import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Collapse } from "@material-ui/core";
import {InfoDialog} from "../InfoDialog/InfoDialog";
import {ILOSQuestion} from "./LOSQuestion.interface";
import LOSQuestionUseStyles from './LOSQuestion.style'

const difficultyIcons = {
  'hard': 'https://salalemacademy.s3.eu-west-1.amazonaws.com/images/1636021486929-lg.svg',
  'medium': 'https://salalemacademy.s3.eu-west-1.amazonaws.com/images/1636020894241-lg.svg',
  'easy': 'https://salalemacademy.s3.eu-west-1.amazonaws.com/images/1633264706918-lg.svg',
}

export const LOSQuestion = (
    {
      LOS,
      question,
      questionPrefix,
      LOSLabel,
      difficultyLabel,
      onEditClick,
      onDeleteClick,
      className,
      difficultyIcon,
      answers,
      extraData
    }: ILOSQuestion) => {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const classes = LOSQuestionUseStyles();

  const handleArrowClick = () => setIsOpen(!isOpen)

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.headerContainer}>
        <Grid container spacing={2} alignItems='center' wrap='nowrap'>
          <Grid item xs={12} className={classes.questionContainer}>
            <Typography>{questionPrefix}</Typography>
            <Typography className={classes.question} dangerouslySetInnerHTML={{ __html: question }}/>
          </Grid>
          {!!extraData && (
            <Grid item sm='auto' className={classes.extraData}>
              <Typography>{extraData}</Typography>
            </Grid>
          )}
          {(difficultyIcon && difficultyLabel) && (
            <Grid item sm='auto' className={classes.difficulty}>
              <img src={difficultyIcons[difficultyIcon]} alt={difficultyLabel}/>
              {difficultyLabel}
            </Grid>
          )}
          <Grid item xs={12} sm='auto' onClick={handleArrowClick} className={classes.arrowIcon}>
            {isOpen ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
          </Grid>
        </Grid>
      </div>
      <Collapse in={isOpen} unmountOnExit className={classes.collapse}>
        <Grid container item className={classes.questionContent}>
          <Grid container item alignItems='center' wrap='nowrap' className={classes.actionsContainer}>
            <Grid container item xs='auto'>
              <Grid container item xs={1} className={classes.losLabel}>
                <Typography className={classes.LOSTitle}>{LOSLabel}</Typography>
              </Grid>
              <Grid container item xs={11}>
                {LOS.map((los: { title: string; description: string; }, index: React.SetStateAction<number>) => (
                  <Grid item xs={4} className={classes.chip}>
                    <InfoDialog
                      title={los.title}
                      description={los.description}
                      chipLabel={'CustomChip'}
                      closable
                      alwaysClosed
                      onClick={() => setSelectedIndex(index)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {onEditClick || onDeleteClick ? (
              <Grid item container xs={2} justify='flex-end'>
                {!!onEditClick &&
                  <EditIcon className={clsx(classes.icon, classes.editIcon)} onClick={onEditClick}/>}
                {!!onDeleteClick &&
                  <CloseIcon className={clsx(classes.icon, classes.deleteIcon)} onClick={onDeleteClick}/>}
              </Grid>
            ) : null}
          </Grid>
          <Grid container item>
            <InfoDialog 
              chipLabel={LOS[selectedIndex]?.label}
              title={LOS[selectedIndex]?.title}
              description={LOS[selectedIndex]?.description}
            />
          </Grid>
          <Grid container item className={classes.answers}>
            {answers.map(({ index, text, isCorrect }) => (
              <Grid container item className={clsx(classes.answer, isCorrect && classes.correctAnswer)}>
                {index && <Typography className={classes.index}>{index}.</Typography>}
                <Typography style={{fontSize: 18}} dangerouslySetInnerHTML={{ __html: text }}/>
                {isCorrect && <CheckCircleIcon className={classes.correctAnswerIcon}/>}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
};

export default LOSQuestion;
