import eslintConfigPrettier from '@electron-toolkit/eslint-config-prettier'
import tseslint from '@electron-toolkit/eslint-config-ts'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  { ignores: ['**/node_modules', '**/dist', '**/out'] },
  tseslint.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginReactRefresh.configs.vite.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_' // 변수명 _로 시작하면 무시
        }
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn', // Any 타입 사용 경고
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn', // ! 연산자 사용 경고
      'no-unused-vars': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 1,
      'no-undef': 'off',
      'react/prop-types': 'off', // TypeScript 사용 시 불필요
      'react/react-in-jsx-scope': 'off', // React 17+에서 자동 import
      'react-refresh/only-export-components': [
        // HMR을 위해 컴포넌트만 export 권장
        'warn',
        { allowConstantExport: true }
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }], // production에서 console.log 방지
      'prefer-const': 'warn', // 재할당 없는 변수는 const 사용
      'no-var': 'error' // var 대신 let/const 사용 강제
    }
  },
  eslintConfigPrettier
)
