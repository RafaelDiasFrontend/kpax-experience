import { defaultTheme } from "../assets/css/themes/default";
import "styled-components";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
