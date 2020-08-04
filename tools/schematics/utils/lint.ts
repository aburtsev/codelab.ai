import {
  eslintPluginImportVersion,
  eslintPluginJsxA11yVersion,
  eslintPluginReactVersion,
  eslintPluginReactHooksVersion,
} from './versions'

export const reactEslintJson = {
  root: true,
  extends: ['@codelab/eslint-config-codelab'],
}

export const extraEslintDependencies = {
  dependencies: {},
  devDependencies: {
    'eslint-plugin-import': eslintPluginImportVersion,
    'eslint-plugin-jsx-a11y': eslintPluginJsxA11yVersion,
    'eslint-plugin-react': eslintPluginReactVersion,
    'eslint-plugin-react-hooks': eslintPluginReactHooksVersion,
  },
}
