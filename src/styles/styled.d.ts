/* eslint-disable */
import 'styled-components'
import type { ThemeType } from './themes/themeTypes'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
