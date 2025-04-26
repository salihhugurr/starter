module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'boundaries'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'boundaries/elements': [
      {
        mode: 'full',
        type: 'features',
        capture: ['featureName'],
        pattern: 'features/*/**/*',
      },
      {
        type: 'shared',
        pattern: 'shared/*/**/*',
      },
      {
        type: 'providers',
        pattern: 'providers/*/**/*',
      },
      {
        type: 'config',
        pattern: 'config/*/**/*',
      },
      {
        type: 'navigation',
        pattern: 'navigation/*/**/*',
      },
    ],
    'boundaries/ignore': ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
  },
  rules: {
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          {
            from: ['features'],
            allow: ['shared', ['features', { featureName: '${from.featureName}' }]],
            message: 'Import from another feature is not allowed. Use shared modules instead.',
          },
          {
            from: ['shared'],
            allow: ['shared', 'config'],
            message: 'Shared modules can import only config and other shared modules.',
          },
        ],
      },
    ],

    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
          {
            pattern: '@shared/**',
            group: 'internal',
          },
          {
            pattern: '@components/**',
            group: 'internal',
          },
          {
            pattern: '@features/**',
            group: 'internal',
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
          },
          {
            pattern: '@services/**',
            group: 'internal',
          },
          {
            pattern: '@utils/**',
            group: 'internal',
          },
          {
            pattern: '@store/**',
            group: 'internal',
          },
          {
            pattern: '@navigation/**',
            group: 'internal',
          },
          {
            pattern: '@providers/**',
            group: 'internal',
          },
          {
            pattern: '@config/**',
            group: 'internal',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        'newlines-between': 'always',

        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Prevent circular dependencies
    'import/no-cycle': 'error',

    // Feature specific rules
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../features/*/*'],
            message: 'Cross-feature imports are not allowed. Use shared modules instead.',
          },
          {
            group: ['src/features/*/*'],
            message: 'Cross-feature imports are not allowed. Use shared modules instead.',
          },
        ],
      },
    ],
  },
  overrides: [
    // Override for navigation files which might need to import from features
    {
      files: ['src/navigation/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'boundaries/element-types': 'off',
        'no-restricted-imports': 'off',
      },
    },
  ],
};
