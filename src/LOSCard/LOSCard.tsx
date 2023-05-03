import React from 'react';
import { makeStyles } from '../makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';

import { Draggable } from 'react-beautiful-dnd';
import {ProgressBar} from '../ProgressBar/ProgressBar'
import Typography from '@material-ui/core/Typography';

import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
// import Box from '@material-ui/core/Box';
import Grid, { GridContentAlignment, GridDirection, GridItemsAlignment, GridJustification, GridSize, GridSpacing, GridTypeMap, GridWrap } from '@material-ui/core/Grid';
import DateRangeIcon from "@material-ui/icons/DateRange";
import {ILOSCard} from "./LOSCard.interface";
import {CommonProps} from '@material-ui/core/OverridableComponent';
import {CustomChip} from "../CustomChip/CustomChip";

const difficultyIcon = {
  easy: 'https://salalemacademy.s3.eu-west-1.amazonaws.com/images/1633347511342-lg.svg',
  medium: 'https://salalemacademy.s3.eu-west-1.amazonaws.com/images/1633347489124-lg.svg',
  hard: 'https://salalemacademy.s3.eu-west-1.amazonaws.com/images/1633347466272-lg.svg'
}

const useStyles = (isDarkMode: boolean | undefined, onTitleClick: (() => void) | undefined) => makeStyles((theme) => ({
  root: {
    width: '100%',
    boxShadow: 'none',
    position: 'relative',
    backgroundColor: "#FFFFFF",
    border: `1px solid #E0E0E0`,
    '& .MuiCardContent-root:last-child': {
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(1),
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: theme.spacing(1),
    color: "#2C2C2C",
    cursor: onTitleClick ? 'pointer' : 'null',
    minHeight: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    overflow: "hidden",
    display: "-webkit-box",
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': "vertical",
    lineHeight: 1.5,
  },
  media: {
    height: 0,
    paddingBottom: '66.66%',
    display: 'flex',
    alignItems: 'flex-end',
    cursor: 'pointer',
    position: 'relative',
    backgroundSize: 'contain',
    [theme.breakpoints.down('sm')]: {
      height: 110,
      paddingBottom: 'unset',
      minWidth: 110,
      alignItems: 'flex-start',
    },
  },
  mask: {
    background: '#2C2C2C',
    opacity: '10%',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  content: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      width: '100%',
    },
  },
  dragIcon: {

    color: "#ADADAD",

    backgroundColor: "#FFFFFF",
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 10,
    padding: '0.5rem 0',
    borderRadius: '2px',
    cursor: 'move'
  },
  moreButton: {

    color: "#2C2C2C",
    cursor: 'pointer',
    marginRight: -theme.spacing(1),
    marginLeft: 0,
    [theme.breakpoints.down('sm')]: {
      // position: 'absolute',
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
  },
  category: {
    fontSize: 14,
    fontWeight: 500,
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    zIndex: 4,
    '& .MuiTypography-root': {
      fontSize: 12,
    },
    [theme.breakpoints.down('sm')]: {
      height: 24,
      '& .MuiTypography-root': {
        fontSize: 10,
      },
      '& .MuiChip-root': {
        height: 20,
      },
      '& .MuiChip-label': {
        padding: '0 6px',
      },
    },
  },
  timeLeft: {
    fontSize: 14,

    color: "#E81010",
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    alignItems: 'center',
    position: 'relative'
  },
  progressBar: {
    margin: '7px 25px 0 25px',
    '& span': {
      color: "#ADADAD",
      fontWeight: 800,
      marginBottom: '-5px',
      marginInlineEnd: '5px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '2px 5px 0 5px',
      '& span': {
        fontSize: '12px',
        marginInlineEnd: '-18px',
        marginBottom: '-3px',
      },
    },
  },
  progressBarContainer: {
    width: '100%',
    height: 35,
    bottom: 0,
    position: 'absolute',
    backgroundColor:isDarkMode ? "#DADADA" : 'rgb(238, 238, 238,0.75)',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: '0px',
      height: 20,
    },
  },
  statistic: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
    },
  },
  statisticItem: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',

    borderRight: `1px solid #E0E0E0`,
    '&:nth-child(2)': {
      padding: `0 ${theme.spacing(2)}px`,
      '& $statisticValue': {

        color: "#9ED155",
      },
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    '&:nth-child(3) $statisticValue': {

      color: "#E60278",
    },
    '&:last-child': {
      borderRight: 0,
    },
  },
  statisticValue: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  statisticLabel: {
    fontSize: 12,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  items: {
    fontSize: 14,
    minHeight: 'auto',
    '&:hover': {

      color: "#40C173",
      background: 'none',
    },
  },
  vendorContainer: {

    color: "#ADADAD",
    display: 'flex',
    alignItems: 'center',
  },
  vendorIcon: {
    marginRight: theme.spacing(1),
    borderRadius: '50%',
    display: 'inline-flex',
    maxWidth: 80,
    maxHeight: 40,
    '& img': {
      maxWidth: 80,
      maxHeight: 25,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 40,
      maxHeight: 20,
      '& img': {
        maxWidth: 40,
        maxHeight: 20,
      },
    },
  },
  vendorAndTimer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vendorName: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  assignedFrom: {

    background: "#FFFFFF",
    border: '1px solid #E9E9E9',
    boxSizing: 'border-box',
    borderRadius: '50%',
    position: 'absolute',
    width: 30,
    height: 30,
    lineHeight: '42px',
    textAlign: 'center',
    top: theme.spacing(6),
    left: theme.spacing(1),

    color: "#ADADAD",
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(5),
      width: 20,
      height: 20,
      lineHeight: '24px',
      '& svg': {
        width: 16,
        height: 16,
      },
    },
  },
  employeeName: {
    fontSize: 20,
    fontWeight: 500,

    color: "#000000",
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  employeeData: {
    textAlign: 'center',

    color: "#ADADAD",
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  employeePosition: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  employeeEmail: {
    fontSize: 16,
    fontWeight: 500,
  },
  notSubscribed: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    '& span': {
      position: 'absolute',
      right: 10,
      bottom: 5,
      zIndex: 10,

      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  },
  notSubscribedEffect: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50px',

    backgroundColor: "#E60278",
    clipPath: 'polygon(0 0, 100% 60%, 100% 100%, 0 101%)',
    opacity: 0.3
  },
  notSubscribedEffect2: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50px',

    backgroundColor: "#E60278",
    clipPath: 'polygon(0 60%, 100% 0%, 100% 100%, 0 101%)'
  },
  dragIconContainer: {
    backgroundColor: '#fff',

    color: "#ADADAD",
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 10,
    width: 'auto',
    padding: '0.25rem 0',
    borderRadius: '2px',
    cursor: 'move'
  },
  cardDragging: {
    outline: `2px solid ${theme.palette.primary.main}`,
    boxShadow: '0 0 7px rgba(0,0,0,0.6)',
    opacity: 0.9
  },
  difficultyLabel: {

    color: "#ADADAD",
    marginLeft: 5,
  },
  dateIcon: {

    color: "#FFFFFF",

    background: "#ADADAD",
    padding: theme.spacing(0.9),
    borderRadius: '50%',
    fontSize: 32,
    minWidth: '1em',
    minHeight: '1em'
  },
  moreButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 12,
  },
  date: {

    background: "#FFFFFF",
    borderRadius: 25,
    padding: `${theme.spacing(0.7)}px ${theme.spacing(2)}px`,

    color: "#ADADAD"
  },
  dateTitle: {
    fontSize: 13,
    marginLeft: 10,

    color: "#757575",
  },
  datesContainer: {

    background: "#E9E9E9",
    position: 'absolute',
    right: 0,
    bottom: '155%',
    padding: theme.spacing(2),
    borderRadius: 5,
    animation: `$showPopup 250ms ease-out`,
    '&::after': {
      display: 'inline-block',
      position: 'absolute',
      content: '""',
      top: '100%',
      right: 10,
      bottom: 0,
      borderLeft: '9px solid transparent',
      borderRight: '9px solid transparent',
      borderTop: `15px solid #E9E9E9`,
    }
  },
  "@keyframes showPopup": {
    "0%": {
      opacity: 0,
      transform: 'translateY(5px)',
    },
    "100%": {
      opacity: 1,
      transform: 'translateY(0)',
    }
  },
  tagText: {
    fontWeight: '500',
    letterSpacing: '1.28px',
    textTransform: 'uppercase',
    fontSize: '12px',
  }
}));

const useMenuStyles = makeStyles(() => ({
  list: {
    border: `1px solid #E0E0E0`,
    borderRadius: 2,
  },
}));

export const LOSCard = (
    {
        image,
        title,
        onTitleClick,
        showMoreButton,
        state,
        timeLeft,
        vendor,
        vendorIcon,
        stateTitle,
        progress,
        statistic,
        className,
        menuItems,
        id,
        onMenuChange,
        assignedFrom,
        employee,
        draggable,
        showNotSubscribed,
        notSubscribedText,
        index,
        isDarkMode,
        questions,
        difficulty,
        difficultyLabel,
        startDate,
        endDate,
        startDateLabel,
        endDateLabel,
        showProgress,
      ...rest
    }: ILOSCard) => {
  const cardImage = !image || image === 'https://salalem-com-static.s3-eu-west-1.amazonaws.com/images/logo_dark_full.png'
      ? 'https://salalemacademy.s3.eu-west-1.amazonaws.com/images/1630223470453-lg.png'
      : image;
  const classes = useStyles(isDarkMode, onTitleClick)();
  const [menuElement, setMenuElement] = React.useState(null);
  const [isHoveringDateIcon, setIsHoveringDateIcon] = React.useState(false);
  const menuClasses = useMenuStyles();

  // const handleMenuClick = (event: { currentTarget: React.SetStateAction<null>; stopPropagation: () => void; }) => {
  //   setMenuElement(event.currentTarget);
  //   event.stopPropagation();
  // };

  const handleMenuClose = (menuId = null, event: { stopPropagation?: any; }) => {
    if (onMenuChange) {
      onMenuChange(id, menuId);
    }
    setMenuElement(null);
    event.stopPropagation();
  };

  function renderDragIcon(provided: { dragHandleProps: JSX.IntrinsicAttributes & { component: React.ElementType<any> } & { alignContent?: GridContentAlignment | undefined; alignItems?: GridItemsAlignment | undefined; children?: React.ReactNode; container?: boolean | undefined; direction?: GridDirection | undefined; item?: boolean | undefined; justify?: GridJustification | undefined; justifyContent?: GridJustification | undefined; lg?: boolean | GridSize | undefined; md?: boolean | GridSize | undefined; sm?: boolean | GridSize | undefined; spacing?: GridSpacing | undefined; wrap?: GridWrap | undefined; xl?: boolean | GridSize | undefined; xs?: boolean | GridSize | undefined; zeroMinWidth?: boolean | undefined } & CommonProps<GridTypeMap<{}, "div">> & Pick<any, string | number | symbol> } | undefined) {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            //@ts-ignore
            {...provided.dragHandleProps}
            className={classes.dragIconContainer}>
          <DragIndicatorIcon/>
        </Grid>
    )
  }

  function renderTitle() {
    return title && (
        <Typography
            component="h2"
            className={classes.title}
            onClick={onTitleClick}
        >
          {title}
        </Typography>
    );
  }

  function renderMoreButton() {
    return showMoreButton && (
        <div className={classes.moreButtonContainer} >
          {/*<MoreVertSharpIcon*/}
          {/*    className={classes.moreButton}*/}
          {/*    onClick={handleMenuClick}*/}
          {/*/>*/}
          <Menu
              anchorEl={menuElement}
              getContentAnchorEl={null}
              open={Boolean(menuElement)}
              onClose={(event) => handleMenuClose(null,event)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              elevation={0}
              classes={menuClasses}
          >
            {menuItems.map((item) => {
              function handleItemClick(event: { stopPropagation?: any; }) {
                item.onClick();
                handleMenuClose(null, event);
              }
              return (
                  <MenuItem
                      key={item.value}
                      onClick={handleItemClick}
                      className={classes.items}
                  >
                    {item.value}
                  </MenuItem>
              );
            })}
          </Menu>
        </div>
    );
  }

  const renderDateIcon = () => (startDate && endDate) && (
      <div>
        {isHoveringDateIcon && (
            <Grid container spacing={1} justifyContent="space-between" wrap="nowrap" className={classes.datesContainer}>
              <Grid item>
                <Typography className={classes.dateTitle}>{startDateLabel}</Typography>
                <div className={classes.date}>
                  <Typography style={{fontSize: 14}} >{startDate}</Typography>
                </div>
              </Grid>
              <Grid item>
                <Typography className={classes.dateTitle}>{endDateLabel}</Typography>
                <div className={classes.date}>
                  <Typography style={{fontSize: 14}} >{endDate}</Typography>
                </div>
              </Grid>
            </Grid>
        )}
        <DateRangeIcon
            className={classes.dateIcon}
            onMouseEnter={() => setIsHoveringDateIcon(true)}
            onMouseLeave={() => setIsHoveringDateIcon(false)}
        />
      </div>
  )

  const renderTimeLeft = () => timeLeft && (
      <Typography
          component="span"
          className={classes.timeLeft}
      >
        {timeLeft}
      </Typography>
  );

  const renderNotSubscribed = () => showNotSubscribed && (
      // <Box className={classes.notSubscribed}>
        <Typography>{notSubscribedText}</Typography>
        // <Box className={classes.notSubscribedEffect}/>
        // <Box className={classes.notSubscribedEffect2}/>
      // </Box>
  )

  const renderVendor = () => vendor && (
      <div className={classes.vendorContainer}>
        {vendorIcon && (
            <span className={classes.vendorIcon}>
          <img src={vendorIcon} alt="title"/>
        </span>
        )}
        <Typography component="span" className={classes.vendorName}>
          {vendor}
        </Typography>
      </div>
  );

  function renderAssignIcon() {
    const Icon = assignedFrom === 'campaign'
        ? OutlinedFlagIcon
        : AssignmentOutlinedIcon;

    return assignedFrom && (
        <div className={classes.assignedFrom}>
          <Icon/>
        </div>
    );
  }

  function renderHeader() {
    return (
        <div className={classes.header}>
          <div className={classes.vendorAndTimer}>
            {renderVendor()}
            {renderTimeLeft()}
          </div>
          {renderDateIcon()}
        </div>
    );
  }
  function renderCategory() {
    const bgColor = {
      live: 'lightGreen',
      scheduled: 'lightBlue',
      draft: 'gray',
      ended: 'lightRed'
    }
    // console.info('status', bgColor[state])
    return state && (
        <CustomChip
            label={!!stateTitle ? stateTitle : state}
            // @ts-ignore
            bgcolor={bgColor[state]}
            variant="semibold"
            className={classes.category}
            tagClass={classes.tagText}
        />
    );
  }
  function renderProgressBar() {

    return (
        <div className={classes.progressBarContainer}>
          <ProgressBar
              className={classes.progressBar}
              value={progress}
              valuePosition="left"
          />
        </div>
    );
  }

  function renderStatistic() {
    return statistic && (
        <div className={classes.statistic}>
          {statistic.map((item) => (
              <div key={item.label} className={classes.statisticItem}>
                <Typography variant="h3" className={classes.statisticValue}>{item.value}</Typography>
                <Typography className={classes.statisticLabel}>{item.label}</Typography>
              </div>
          ))}
        </div>
    );
  }

  function renderFooter() {
    return (
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <div>
            <Typography style={{fontSize: 15}}>{questions}</Typography>
          </div>
          <div>
            {difficulty && <img src={difficultyIcon[difficulty]} alt={difficultyLabel}/>}
            <Typography className={classes.difficultyLabel}>{difficultyLabel}</Typography>
          </div>
        </Grid>
    )
  }

  function renderActivityData() {
    return (
        <>
          {renderHeader()}
          {renderTitle()}
          {renderFooter()}
        </>
    );
  }

  function renderEmployeeData() {
    const position = employee?.job_role;
    const id = employee?.id;
    const email = employee?.email;

    return (
        <div className={classes.employeeData}>
          <Typography className={classes.employeeName}>
            {title}
          </Typography>
          <Typography className={classes.employeePosition}>
            {position}
          </Typography>
          <Typography className={classes.employeeEmail}>
            {`${id} | ${email}`}
          </Typography>
        </div>
    );
  }

  function renderCardContent(provided: { dragHandleProps: JSX.IntrinsicAttributes & { component: React.ElementType<any> } & { alignContent?: GridContentAlignment | undefined; alignItems?: GridItemsAlignment | undefined; children?: React.ReactNode; container?: boolean | undefined; direction?: GridDirection | undefined; item?: boolean | undefined; justify?: GridJustification | undefined; justifyContent?: GridJustification | undefined; lg?: boolean | GridSize | undefined; md?: boolean | GridSize | undefined; sm?: boolean | GridSize | undefined; spacing?: GridSpacing | undefined; wrap?: GridWrap | undefined; xl?: boolean | GridSize | undefined; xs?: boolean | GridSize | undefined; zeroMinWidth?: boolean | undefined } & CommonProps<GridTypeMap<{}, "div">> & Pick<any, string | number | symbol> } | undefined) {
    return (
        <Card className={clsx(classes.root, className)} {...rest}>
          {draggable && renderDragIcon(provided)}
          <CardMedia className={classes.media} image={cardImage} onClick={onTitleClick}>
            <div className={classes.mask}/>
            {renderAssignIcon()}
            {renderCategory()}
            {renderProgressBar()}
            {renderNotSubscribed()}
            {renderMoreButton()}
          </CardMedia>
          <CardContent className={classes.content}>
            {employee ? renderEmployeeData() : renderActivityData()}
            {renderStatistic()}
          </CardContent>
        </Card>
    )
  }

  return draggable ? (
      <div>
        {/* @ts-ignore*/}
        <Draggable draggableId={id} key={id} index={index} >
          {(provided: { dragHandleProps: JSX.IntrinsicAttributes & { component: React.ElementType<any>; } & { alignContent?: GridContentAlignment | undefined; alignItems?: GridItemsAlignment | undefined; children?: React.ReactNode; container?: boolean | undefined; direction?: GridDirection | undefined; item?: boolean | undefined; justify?: GridJustification | undefined; justifyContent?: GridJustification | undefined; lg?: boolean | GridSize | undefined; md?: boolean | GridSize | undefined; sm?: boolean | GridSize | undefined; spacing?: GridSpacing | undefined; wrap?: GridWrap | undefined; xl?: boolean | GridSize | undefined; xs?: boolean | GridSize | undefined; zeroMinWidth?: boolean | undefined; } & CommonProps<GridTypeMap<{}, "div">> & Pick<any, string | number | symbol>; } | undefined, snapshot: { isDragging: any; }) => (
              <div
                  //@ts-ignore
                  ref={provided?.innerRef}
                  //@ts-ignore
                  {...provided?.draggableProps}
                  className={snapshot.isDragging && classes.cardDragging}
              >
                {renderCardContent(provided)}
                {/*@ts-ignore*/}
                {provided.placeholder}
              </div>
          )}
        </Draggable>
      </div>
      
  ) : renderCardContent(undefined)
};

export default LOSCard;