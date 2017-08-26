// @see https://www.gatsbyjs.org/docs/add-custom-webpack-config/

exports.modifyWebpackConfig = ({
  config,
  stage
}) => {
  switch (stage) {
    case 'build-css':
    case 'build-html':
    case 'build-javascript':
    case 'develop':
    case 'develop-html':
  }
  return config;
};
