import styled from "styled-components";
import { ContentHeader, DataUser} from "../../index";
export function Header({state, setState}) {
  return (<ContentHeader>
    <DataUser state={state} setState={setState}/>
  </ContentHeader>);
}
const Container =styled.div`
  
`