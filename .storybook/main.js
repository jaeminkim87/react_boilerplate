module.exports = {
  stories: ['../src/Components/**/*.stories.js'],
  addons: [
    '@storybook/addon-docs/preset',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {},
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-links/register',
  ],
};
