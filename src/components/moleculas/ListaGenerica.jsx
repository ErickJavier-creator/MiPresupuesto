import styled from "styled-components";
export function ListaGenerica() {
  return (<Container>
<h1>Componenasdsadste</h1>
  </Container>);
}
const Container = styled.div`
  margin-top: 10px;
  position: absolute;
  top: 88%;
  width: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.bgtotal};
  border-radius: 10px;
  border: 3px solid #3a3a3a;
  padding: 10px;
  color: ${({ theme }) => theme.text};
`;