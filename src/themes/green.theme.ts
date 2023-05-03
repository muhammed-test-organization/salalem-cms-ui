import _merge from 'lodash.merge';
import commonThemeConfig from './_common.theme';
import * as colors from './_colors';
import * as darkColors from './_dark-colors';
import { GREEN_THEME } from './constants';

export const greenThemeConfig = {
  name: GREEN_THEME,
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  palette: {
    background: {
      default: colors.veryLightGray,
    },
    darkBackground:{
      default: darkColors.veryLightGray,
    },
    primary: {
      light: colors.limeGreen,
      main: colors.darkLimeGreen,
      dark: colors.veryDarkLimeGreen,
      contrastText: colors.textWhite,
    },
    darkPrimary: {
      light: darkColors.limeGreen,
      main: darkColors.darkLimeGreen,
      dark: darkColors.veryDarkLimeGreen,
      contrastText: darkColors.textWhite,
    },
    secondary: {
      light: colors.lightGray,
      main: colors.mediumGray,
      dark: colors.darkGray,
    },
    darkSecondary: {
      light: darkColors.lightGray,
      main: darkColors.mediumGray,
      dark: darkColors.darkGray,
    },
  },
};

export default _merge({}, commonThemeConfig, greenThemeConfig);
