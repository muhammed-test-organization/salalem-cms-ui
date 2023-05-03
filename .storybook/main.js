const path = require('path');

module.exports = {
  babel: async options => ({
    ...options,

    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      ["@babel/plugin-proposal-private-property-in-object", { "loose": false }],
    ],
  }),
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async config => {
    // Customize webpack config here
    config.resolve.alias = {
      '@root': path.resolve(__dirname, '../'),
      '@src': path.resolve(__dirname, '../src'),
      '@theme': path.resolve(__dirname, '../theme.js'),
      '@themes': path.resolve(__dirname, '../themes'),
      '@test-utils': path.resolve(__dirname, '../utils/test-utils.jsx'),
    };
    return config;
  },
};
