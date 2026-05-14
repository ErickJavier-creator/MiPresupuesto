import {
  MyRoutes,
  Sidebar,
  Device,
  Light,
  Dark,
  AuthContextProvider,
  Menuambur,
  useUsuariosStore
} from "./index";
import {useLocation} from "react-router-dom";
import { createContext, useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { useQuery } from "@tanstack/react-query";
export const ThemeContext = createContext(null);
function App() {
  const {pathname} = useLocation();
  const [theme, setTheme] = useState("dark");
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mostrarUsuarios = useUsuariosStore((s) => s.mostrarUsuarios);
  const { isPending, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: mostrarUsuarios,
  });

  if (isPending) return <h1>Cargando...</h1>;
  if (error) return <h1>Error al cargar los usuarios</h1>;

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            {
              pathname != "/login"? (<Container className={sidebarOpen ?  "active": ""}>
                <div className="ContentSidebar">
                  <Sidebar state={sidebarOpen} setState={setSidebarOpen}/>
                </div>
                <div className="ContentMenuambur">
                  <Menuambur />
                </div>
                <ContainerBody>
                  <MyRoutes />
                </ContainerBody>
              </Container>) : (<MyRoutes />)
            }
            
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.bgtotal};
  transition: 0.3s ease-in-out;
 
  .ContentMenuambur{
    display: block;
    position: absolute;
    left: 20px;
  }
  .ContentSidebar {
    display: none;
  }
  @media ${Device.tablet} {
    display: grid;
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuambur{
      display: none;
    }
  }
`;
const ContainerBody = styled.div`
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App;
