import 'styled-components'
import { customTheme } from '../global'

declare module 'styled-components' {
  type ThemeType = typeof customTheme

  export interface DefaultTheme extends ThemeType {}
}