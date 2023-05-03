import React from 'react';
import ReactDOM from 'react-dom';
import {
  ThemeProvider,
  StylesProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { GreenTheme } from '@theme';

export function ThemeProviderComponent({ children, muiTheme = GreenTheme }) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={createMuiTheme(muiTheme)}>
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
}

export function createTestComponent(Component, props, muiTheme) {
  return (
    <ThemeProviderComponent children={<Component {...props} />}
                            muiTheme={muiTheme}/>
  );
}

export function rendersWithMinProps(component) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
}
