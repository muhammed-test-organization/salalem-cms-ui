import _merge from 'lodash.merge';
import * as colors from './_colors';
import commonThemeConfig from './_common.theme';
import { GRAY_THEME } from './constants';

const grayThemeConfig = {
  name: GRAY_THEME,
  palette: {
    primary: {
      light: colors.lightGray,
      main: colors.mediumGray,
      dark: colors.lightGray,
      contrastText: colors.textBlack,
      contrastThreshold: 1,
    },
    secondary: {
      light: colors.lightGray,
      main: colors.mediumGray,
      dark: colors.mediumGray,
      contrastText: colors.textBlack,
      contrastThreshold: 10,
    },
  },
};

export default _merge({}, commonThemeConfig, grayThemeConfig);
