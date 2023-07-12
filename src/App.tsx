import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/css/global";
import { defaultTheme } from "./assets/css/themes/default";
import { Transcations } from "./pages/Transactions";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Transcations />
      </ThemeProvider>
    </>
  );
}

export default App;
