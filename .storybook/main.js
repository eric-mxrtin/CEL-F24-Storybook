/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-styling-webpack',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  webpackFinal: async (config) => {
    // Ensure .jsx files are handled correctly by Vite or Webpack
    config.resolve.extensions.push('.jsx');
    return config;
  },
};

export default config;
