import styled from "styled-components";
import {ItemsDesplegables, v} from "../../index";
export function ListaDesplegable({data, top}) {
  return (<Container top={top}>
      {
        data.map((item, index) => {
          return (
            <ItemsDesplegables key={index} item={item}  />
          )
        })
      }
  </Container>);
}
const Container =styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({theme}) => theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.top};
  box-shadow: ${() => v.boxshadowGray}
`