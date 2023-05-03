import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {ArrowDropDown} from "@material-ui/icons";
import clsx from "clsx";
import Check from "@material-ui/icons/Check";
import {Collapse} from "@material-ui/core";
import LinesAccordionUseStyles from "./LinesAccordion.styles";
import {ILinesAccordion} from "./ILinesAccordion.interface";

export const LinesAccordion = (
    {
        content,
        highlightOpen,
        isFirstOpen,
        onCloseFirst,
    }: ILinesAccordion) => {
    const classes = LinesAccordionUseStyles();
    const [openItems, setOpenItems] = useState<number[]>(isFirstOpen ? [0] : [])
    useEffect(()=>{
        if(openItems[0] !== 0 && !!onCloseFirst)
            onCloseFirst();
    },[openItems])
    let idCounter = 0;

    const handleItemClick = (id: number) => {
        if (openItems.indexOf(id) !== -1) {
            setOpenItems(prevState => prevState.filter(item => item !== id))
        } else {
            setOpenItems(prevState => [...prevState, id])
        }
    }

    const renderList = (contentList: any[] , level = 1) => (
        
        contentList.map((item: { content: any; title?: any; icon?: any; isDone?: any; extraData?: any; }, index: number) => {
        const {title, icon, isDone, content, extraData} = item

        const id = idCounter
        idCounter = idCounter + 1

        const isOpen = openItems.indexOf(id) > -1
        const isFirstLevel = level === 1
        
        const isLastLevel = !contentList.some((item: { content: any; }) => item.content)
        
        const isLastLevelWithoutSubParent = !contentList.some((item: { content: any; }) => item.content) && level === 2
        
        const isLastItem = index === contentList.length - 1

        return (
          <Grid container className={classes.container}>
            {!isLastItem && !isFirstLevel && <div className={clsx(classes.line, isLastLevel && classes.lastLevelLine, isLastLevelWithoutSubParent && classes.noSubParentLastLevelLine)} />}
            <Grid
              container
              justify={'space-between'}
              alignItems={'center'}
              wrap={'nowrap'}
              className={clsx(isLastLevel ? classes.smallRow : classes.row, item.content && classes.clickableRow )}
              onClick={() => item.content && handleItemClick(id)}
            >
              {level > 1 &&
                <div className={
                  clsx(
                    classes.shape,
                    isLastLevel && classes.lastLevelShape,
                    isLastLevelWithoutSubParent && classes.noSubParentShape
                  )}
                />
              }
              <div
                className={clsx(
                  classes.icon,
                  !isFirstLevel && classes.subIcon,
                  isLastLevel && classes.lastLevelIcon,
                  (isDone || (highlightOpen && isOpen)) && classes.doneIcon,
                  (isDone || (highlightOpen && isOpen)) && !isFirstLevel && classes.doneSubIcon,
                  (isDone || (highlightOpen && isOpen)) && isLastLevel && classes.doneLastLevelIcon,
                )}
              >
                {isOpen && (!isLastItem || isOpen) && !isLastLevel && <div className={classes.iconLine}/>}
                {<div className={clsx(classes.openIcon, isOpen && classes.showOpenIconCircle)} />}
                {icon ? icon : isDone ? <Check/> : null}
              </div>
              <Grid
                container
                justify={'space-between'}
                alignItems={'center'}
                wrap={'nowrap'}
                className={clsx(isLastLevel ? classes.smallRowInfo : classes.rowInfo, isOpen && classes.openRowInfo)}
              >
                <Typography style={{fontSize: isLastLevel ? 16 : 18}} className={classes.title}>{title}</Typography>
                {extraData ? <div className={classes.extraData}>{extraData}</div> : null}
                {content && content.length !== 0 && <ArrowDropDown className={clsx(classes.arrowIcon, isOpen && classes.arrowIconFlipped)}/>}
              </Grid>
            </Grid>
            {content && content.length !== 0 &&
              <Collapse in={isOpen} unmountOnExit style={{width: '100%'}}>
                <Grid container className={classes.subContainer}>
                  {renderList(content, level + 1)}
                </Grid>
              </Collapse>}
          </Grid>
        )
      }
    )
  )

  return (
    <Grid container>
      {renderList(content)}
    </Grid>
  );
};

export default LinesAccordion;
