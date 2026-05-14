import styled from "styled-components";
import {v, InputBuscadorLista, ConvertirCapitalize} from "../../index";
import iso from "iso-country-currency"
import { useState } from "react";
export function ListaPaises({setSelect, setState}) {
    const [dataResult, setDataResult] = useState([]);
    const isoCodigos = iso.getAllISOCodes();
    function seleccionar(p){
        setSelect(p)
        setState();
    }
    function buscar(e) {
        let filtrado = isoCodigos.filter((item) =>{
            return item.countryName==ConvertirCapitalize(e.target.value)
        } )
        setDataResult(filtrado);
    }
  return (
    <Container>
      <header className="header">
        <span>busca tu pais</span>
        <span className="close" onClick={setState}> {<v.iconocerrar />}</span>
      </header>
      <InputBuscadorLista onChange={buscar} placeholder="buscar..." />
    {
        dataResult.length > 0 && dataResult.map((item, index) => {
            return (
                <ItemContainer key={index} onClick={() => seleccionar(item)}>
                    <span>{item.countryName}</span>
                    <span>{item.symbol}</span>
                </ItemContainer>
            )
        })
    }
    </Container>
  );
}
const Container =styled.div`
  margin-top: 10px;
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.bgtotal};
  border-radius: 10px;
  border: 3px solid #3a3a3a;
  padding: 10px;
  gap: 10px;
  color: ${({theme}) => theme.text};
  transition: all 0.3s;
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: inherit;
    .close{
        cursor: pointer;
        font-size: 25px;
        transition: 0.2s;
        &:hover{
            color: ${() => v.colorselector};
            transform: scale(1.2);
        }
    }
  }


`
const ItemContainer = styled.section`
    gap: 10px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer; 
    transition: 0.3s;
    &:hover{
        background-color: #303030;
    }
`