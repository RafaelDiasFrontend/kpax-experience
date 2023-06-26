import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/css/global";
import { defaultTheme } from "./assets/css/themes/default";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles theme={undefined} />
        <div>Inicio do Projeto</div>
      </ThemeProvider>
    </>
  );
}

export default App;
