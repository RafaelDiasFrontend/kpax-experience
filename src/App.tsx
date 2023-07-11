import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/css/global";
import { defaultTheme } from "./assets/css/themes/default";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <div>testando git e vercel</div>
      </ThemeProvider>
    </>
  );
}

export default App;
