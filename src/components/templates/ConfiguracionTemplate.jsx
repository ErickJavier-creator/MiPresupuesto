import styled from "styled-components";
import {useState} from "react";
import {
  Header,
  Selector,
  v,
  ListaPaises,
  useUsuariosStore,
  ListaGenerica,
  TemasData,
  Btnsave,
} from "../../index";
export function ConfiguracionTemplate() {
  // datos del usuario
  const {dataUsuarios, editartemamonedauser} = useUsuariosStore();
  const [select, setSelect] = useState([]);
  const [selectTema, setSelectTema] = useState([]);
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  const [stateListaTemas, setStateListaTemas] = useState(false);
  // pais seleccionado
  const moneda = select.symbol? select.symbol : dataUsuarios.moneda;
  const pais = select.countryName? select.countryName : dataUsuarios.pais;
  const paisSeleccionado = "emoji " + moneda + " " + pais;
  // tema
  const iconoBd = dataUsuarios.tema === "0" ? "☀️" : "🌑"
  const temaBd = dataUsuarios.tema === "0" ? "light" : "dark";
  const temainicial = selectTema.tema === "0" ? selectTema.tema : temaBd;
  const iconoinicial = selectTema.icono? selectTema.icono : iconoBd;
  const temaSeleccionado = iconoinicial + " " + temainicial;
// funcion editar 

const editar = async () =>  {
  const temaElegido = selectTema.descripcion === "light" ? "0" : "1";
  const p = {
    tema: temaElegido,
    moneda: moneda,
    pais: pais,
    id: dataUsuarios.id
  }
  await editartemamonedauser(p);
}
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
          <Selector
            state={stateListaPaises}
            texto1={paisSeleccionado}
            color={v.colorselector}
            funcion={() => setStateListaPaises(!stateListaPaises)}
          />
          {stateListaPaises && (
            <ListaPaises
              setSelect={(p) => setSelect(p)}
              setState={() => setStateListaPaises(!stateListaPaises)}
            />
          )}
        </ContentCard>
        <ContentCard>
          <span>Tema:</span>
          <Selector
            texto1={temaSeleccionado}
            color={v.colorselector}
            state={stateListaTemas}
            funcion={() => setStateListaTemas(!stateListaTemas)}
          />
            {stateListaTemas && <ListaGenerica data={TemasData} setState={() => setStateListaTemas(!stateListaTemas)} funcion={setSelectTema}/>}
          
        </ContentCard>
        <Btnsave  titulo="Guardar Cambios" bgcolor={v.colorselector} icono={<v.iconoguardar/>} funcion={editar}/>
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
        flex-direction: column;
        justify-content: start;
        gap: 30px;
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