export function getMainButtonStyles(theme: { palette: { primary: { main: any; contrastText: any; dark: any; light: any; }; secondary: { light: any; }; }; colors: { white: any; lightGray: any; mediumGray: any; }; }) {
  return ({
    contained: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderBottom: `1px solid ${theme.palette.primary.dark}`,
      '&:hover': {
        background: theme.palette.primary.light,
      },
      '&:active': {
        background: theme.palette.primary.dark,
        transform: 'scale(.95)',
      },
      '&$disabled': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
    outlined: {
      background: theme.colors.white,
      color: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.main}`,
      '&:hover': {
        background: theme.colors.lightGray,
      },
      '&:active': {
        background: theme.colors.mediumGray,
        transform: 'scale(.95)',
      },
      '&$disabled': {
        background: theme.colors.lightGray,
        color: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`,
      },
    },
    text: {
      background: 'none',
      color: theme.palette.primary.main,
      '&:hover': {
        background: theme.colors.lightGray,
      },
      '&:active': {
        background: theme.colors.mediumGray,
        transform: 'scale(.95)',
      },
      '&$disabled': {
        background: theme.palette.secondary.light,
        color: theme.palette.primary.main,
      },
    },
  });
}

export function getGrayButtonStyles(theme: { colors: { mediumGray: any; textBlack: any; darkGray: any; lightGray: any; }; }) {
  return ({
    contained: {
      background: theme.colors.mediumGray,
      color: theme.colors.textBlack,
      borderBottom: `1px solid ${theme.colors.darkGray}`,
      '&:hover': {
        background: theme.colors.lightGray,
      },
      '&:active': {
        background: theme.colors.darkGray,
        transform: 'scale(.95)',
      },
      '&$disabled': {
        background: theme.colors.mediumGray,
        color: theme.colors.textBlack,
      },
    },
    outlined: {
      background: theme.colors.lightGray,
      color: theme.colors.textBlack,
      border: `2px solid ${theme.colors.mediumGray}`,
      '&:hover': {
        background: theme.colors.mediumGray,
        border: `2px solid ${theme.colors.mediumGray}`,
      },
      '&:active': {
        background: theme.colors.darkGray,
        transform: 'scale(.95)',
      },
      '&$disabled': {
        background: theme.colors.mediumGray,
        color: theme.colors.textBlack,
        border: `2px solid ${theme.colors.mediumGray}`,
      },
    },
    text: {
      background: 'none',
      color: theme.colors.textBlack,
      '&:hover': {
        background: theme.colors.mediumGray,
      },
      '&:active': {
        background: theme.colors.darkGray,
        transform: 'scale(.95)',
      },
      '&$disabled': {
        background: theme.colors.mediumGray,
        color: theme.colors.textBlack,
      },
    },
  });
}
