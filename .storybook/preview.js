import React from 'react';
import ThemeKnob from './helpers/ThemeKnob';


export const decorators = [
  (Story) => (
    <ThemeKnob>
      <Story />
    </ThemeKnob>
  )
];

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'lightblue', value: '#F6F9FC', default: true },
      { name: 'white', value: '#FFFFFF', default: true },
      { name: 'facebook', value: '#3b5998' }
    ]
  }
};