const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsPaths = new TsconfigPathsPlugin();

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // https://github.com/nrwl/nx/issues/2320
  config.resolve.plugins
    ? config.resolve.plugins.push(tsPaths)
    : (config.resolve.plugins = [tsPaths]);

  // Return the altered config
  return config;
};
