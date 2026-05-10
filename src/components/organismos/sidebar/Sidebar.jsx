import styled from "styled-components";
import {v, LinksArray} from "../../../index";
import { NavLink } from "react-router-dom";

export function Sidebar({state, setState}) {
  return (
    <Main>
      <Container lgSpacing={v.lgSpacing}>
        <div className="Logocontent">
          <div className="imgcontent">
            <img src={v.logo} alt="" />
          </div>
          <h2>Mi Presupuesto</h2>
        </div>

        {LinksArray.map(({icon, label, to}) => (
            <NavLink to={to}>
              <div className="Linkicon">{icon}</div>
              <span>{label}</span>
            </NavLink>
          ))
        }
        <Divider />
        
      </Container>
    </Main>
  );
}
const Container =styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 100;
  height: 100%;

`
const Main = styled.div`
  
`
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg4};
  margin: ${(props) => props.lgSpacing} o;
`