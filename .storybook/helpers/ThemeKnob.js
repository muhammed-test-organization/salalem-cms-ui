import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { ThemeProvider, StylesProvider, createTheme, jssPreset } from '@material-ui/core/styles';
import { select } from '@storybook/addon-knobs';
import themes from '../../src/themes';

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
  insertionPoint: document.getElementById('jss-insertion-point')
});
const themeNames = Object.keys(themes);
const directions = ['ltr', 'rtl'];

export default ({ children }) => {

  const theme = select(
    'Theme',
    themeNames,
    themeNames[0],
    'Themes'
  );

  const direction = select(
    'Direction',
    directions,
    directions[0],
    'Themes'
  );

  const themeObject = createTheme({
    ...themes[theme],
    direction
  });

  return (
    <div dir={direction}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={themeObject}>
          {children}
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};
