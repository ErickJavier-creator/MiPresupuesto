import styled from "styled-components";
import {v, Btnsave} from "../../../index";
export function SidebarCard() {
  return (
    <Container>
      <span className="icon"> {<v.iconoayuda />}</span>

      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>Centro de Ayuda</h3>
        <div className="contentBtn">
          <Btnsave titulo="Contactar" bgcolor="#f8f2fd" />
        </div>
      </div>
    </Container>
  );
}
const Container =styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;
  .icon {
    position: absolute;
    font-size: 3rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }
  
  .cardContent{
    position: relative;
    padding: 1rem;
    background: ${({ theme }) => theme.bg5};
    border-radius: 10px;
    overflow: hidden;
    .circle1, .circle2{
      position: absolute;
      border-radius: 50%;
      background: ${({ theme }) => theme.whiteBg};
      opacity: 0.7;
    }
    .circle1{
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
    }
    .circle2{
      height: 150px;
      width: 150px;
      bottom: -80px;
      right: -70px;
      z-index: 0;
    }
    h3{
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 800;
      color: #000;
    }
    .contentBtn{
      margin-left: -px;
    }
  }


`