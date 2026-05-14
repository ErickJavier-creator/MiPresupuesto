import styled from "styled-components";
import {UserAuth, BtnCircular, v, ListaDesplegable, DesplegableUser} from "../../index";
export function DataUser() {
    const {user} = UserAuth();
  return (
    <Container>
      <div className="imgContainer">
        <img src={user.picture} />
      </div>
      
        <BtnCircular
          icono={<v.iconocorona />}
          width="25px"
          height="25px"
          bgcolor="#ffffff"
          textcolor="#181616"
          fontsize="11px"
          translateX="-50px"
            translateY="-12px"
        />
      <span className="nombre">{user.name}</span>
      <ListaDesplegable  data={DesplegableUser} top="60px"/>
    </Container>
  );
}
const Container =styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
    align-items: center;
    justify-content: end;
    padding: 8px;
    border-radius: 50px;
    margin: 15px;
    cursor: pointer;
    .imgContainer{
        height: 40px;
        width: 40px;
        min-height: 40px;
        min-width: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 22px;
        display: flex ;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
            object-fit: cover;
        }
    }
    &:hover{
        background-color: ${({theme}) => theme.bg3};
    }
    .nombre{
        width: 100%;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-wrap: break-word;
    }
`
