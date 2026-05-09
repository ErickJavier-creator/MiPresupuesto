import {MyRoutes} from "./index"
import {createContext, useState} from "react"
import {ThemeProvider} from "styled-components"
import {Light, Dark, AuthContextProvider} from "./index"
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme==="light"? Light : Dark

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <MyRoutes />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App
