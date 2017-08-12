// @see https://www.gatsbyjs.org/docs/add-custom-webpack-config/
const webpack = require('webpack');

exports.modifyWebpackConfig = ({
  config,
  stage
}) => {
  switch (stage) {
    case 'develop':
      config.merge({
        postcss: [
          require('postcss-import')({
            addDependencyTo: webpack
          }),
          require('postcss-custom-properties'),
        ]
      })

  }
  return config;
};
