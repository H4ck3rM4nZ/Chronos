/* eslint-disable */
import { darkTheme } from './themes/darkTheme'
import 'styled-components'

declare module 'styled-components' {
  type ThemeType = typeof darkTheme

  export interface DefaultTheme extends ThemeType {}
}
