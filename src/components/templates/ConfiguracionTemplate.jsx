import styled from "styled-components";
import {Header} from "../../index";
export function ConfiguracionTemplate() {
  return (
    <Container>
      <header className="header">
        <Header />
      </header>
      <section className="area1"></section>
      <section className="area2"></section>
      <section className="main"></section>
    </Container>
  );
}
const Container =styled.div`
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
`