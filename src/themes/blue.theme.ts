import _merge from 'lodash.merge';
import * as colors from './_colors';
import commonThemeConfig from './_common.theme';
import { BLUE_THEME } from './constants';

export const blueThemeConfig = {
  name: BLUE_THEME,
  palette: {
    primary: {
      light: colors.brightBlue,
      main: colors.strongBlue,
      contrastText: colors.textWhite,
    },
    secondary: {
      light: colors.softBlue,
      main: colors.brightBlue,
      dark: colors.strongBlue,
      contrastText: colors.textWhite,
    },
  },
};

export default _merge({}, commonThemeConfig, blueThemeConfig);
