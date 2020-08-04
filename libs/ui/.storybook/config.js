import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, configure } from '@storybook/react'
import 'antd/dist/antd.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import '../../../.storybook/config'

addDecorator(withKnobs);
configure(require.context('../src', true, /\.stories\.(j|t)sx?$/), module);
