import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.extends('prettier'),
  {
    rules: {
      // Prettier compatibility - let Prettier handle formatting
      semi: ['error', 'never'],
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],

      // JSX quotes - allow double quotes in JSX attributes
      'jsx-quotes': ['error', 'prefer-double'],

      // TypeScript specific
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React specific - very relaxed rules
      'react/jsx-curly-brace-presence': 'off', // Allow curly braces for clarity
      'react/self-closing-comp': 'off', // Disable to avoid conflicts
      'react/jsx-sort-props': 'off', // Disable strict prop sorting
      'react/jsx-no-comment-textnodes': 'off', // Allow comments in JSX

      // General code quality - relaxed
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error', // Keep this as error
      'object-shorthand': 'warn',
      'prefer-template': 'warn',

      // Import organization - disabled to avoid conflicts with Prettier
      'import/order': 'off', // Let Prettier handle import organization
      'sort-imports': 'off', // Disable built-in sort-imports
    },
  },
]

export default eslintConfig
