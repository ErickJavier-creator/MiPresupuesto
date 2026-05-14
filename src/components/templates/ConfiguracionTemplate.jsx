import styled from "styled-components";
import {useState} from "react";
import {Header, Selector,v, ListaPaises, useUsuariosStore} from "../../index";
export function ConfiguracionTemplate() {
  const {dataUsuarios} = useUsuariosStore();
  const [select, setSelect] = useState([]);
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  const moneda = select.symbol? select.symbol : dataUsuarios.moneda;
  const pais = select.countryName? select.countryName : dataUsuarios.pais;
  const paisSeleccionado = "emoji " + moneda + " " + pais;
  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <h1>Ajustes</h1>
      </section>
      <section className="area2">
        <ContentCard>
          <span>Moneda:</span>
          <Selector state={stateListaPaises} texto1={paisSeleccionado} color={v.colorselector} funcion={() => setStateListaPaises(!stateListaPaises)} />
          {stateListaPaises && (
            <ListaPaises
              setSelect={(p) => setSelect(p)}
              setState={() => setStateListaPaises(!stateListaPaises)}
            />
          )}
        </ContentCard>
      </section>
      <section className="main"></section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({theme} ) => theme.bgtotal};
  color: ${({theme} ) => theme.text};
  display: grid;
  grid-template: 
  "header" 100px
  "area1" 100px
  "area2" 50px
  "main" auto;

    .header{
        grid-area: header;
        background-color: rgba(180, 10, 10, 0.1);
        display: flex;
        align-items: center;
}

    .area1{
        grid-area: area1;
        background-color: rgba(10, 180, 10, 0.1);
        display: flex;
        align-items: center;
}
    
    .area2{
        grid-area: area2;
        background-color: rgba(10, 10, 180, 0.1);
        display: flex;
        align-items: center;
}
    .main{
        grid-area: main;
        background-color: rgba(180, 180, 10, 0.1);
        display: flex;
        align-items: center;
    }
`;
const ContentCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;