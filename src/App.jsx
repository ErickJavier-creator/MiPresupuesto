import {MyRoutes, Sidebar, Device,Light, Dark, AuthContextProvider} from "./index"
import {createContext, useState} from "react"
import {ThemeProvider, styled} from "styled-components"
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme==="light"? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container>
              <Sidebar />   
              <ContainerBody>
                <MyRoutes />
              </ContainerBody>
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
@media ${Device.tablet}{
  display: grid;
  grid-template-columns: 65px 1fr;

}
`;
const ContainerBody = styled.div`
  grid-column: 2;
  width: 100%;
`
  
export default App
