module.exports = {
  extends: [
    'react-tools',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    qoutes: ['error', 'double'],
  },
}
