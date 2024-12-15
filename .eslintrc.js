module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // 繼承套件的規則設定
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // 'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  // parser 解析依賴設定
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: ['@typescript-eslint', 'import', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    // 需在這邊加入你的ESLint設定
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'export',
      },
      {
        blankLine: 'never',
        prev: 'export',
        next: 'export',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
