import styled from "styled-components";
import {Device, v} from "../../index";
export function ListaGenerica() {
  return (<Container>
    <section className="contentClose">
<span> <v.iconocerrar/></span>
    </section>
    <section>

    </section>
  </Container>);
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.bgtotal};
  color: ${({theme}) => theme.text};
  position: absolute;
  margin-top: 15px;
  top: 88%;
    width: 100%;
@media ${() => Device.tablet} {
    width: 400px;
}
`;