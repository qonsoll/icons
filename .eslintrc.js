module.exports = {
  extends: [
    'react-app',
    'prettier',
    'prettier/react',
    'plugin:storybook/recommended'
  ],
  root: true,
  parser: 'babel-eslint',
  plugins: ['import', 'babel', 'react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: '16.9'
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '/']
      }
    }
  },
  rules: {
    semi: ['error', 'never'],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'no-return-await': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        printWidth: 80,
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        quoteProps: 'as-needed',
        bracketSameLine: false,
        bracketSpacing: true
      }
    ]
  }
}
