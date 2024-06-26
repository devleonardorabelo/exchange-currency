module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  ignorePatterns: ['**/*.d.ts', '**/*.config', '**/*.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'import',
    'react',
    'react-hooks',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { overrides: { constructors: 'off' } },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [],
        classes: [],
        interfaces: ['field', 'constructor', 'method'],
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-default-export': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/type-annotation-spacing': ['warn', { after: true }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': 'error',
    'import/default': 2,
    'import/export': 2,
    'import/namespace': 2,
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'internal',
          'parent',
          'builtin',
          'sibling',
          'index',
          'object',
          'type',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    'import/prefer-default-export': 'warn',
    'linebreak-style': 0,
    'react/default-props-match-prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-key': 'off',
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
