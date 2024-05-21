import styled from "styled-components";
import { Card } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  top: 0;
  width: 100%;
  height: 10%;
`;

export const ImgMulher = styled.img`
  display: flex;
  margin: 0.25%;
  width: 20%;
`;

export const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30%;
  background-color: #2ABF40;
`;

export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;
`;

export const TextoPrincipal = styled.h1`
  color: #F2E307;
`;

export const TextoSecundario = styled.h2`
  color: #FFFFFF;
    font-family: "Roboto", sans-serif;
  font-weight: 900;
`;

export const BotaoPrincipal = styled.div`
  background-color: #F2E307;
  width: 40%;
  cursor: pointer;
  border-radius: 2px;
  margin: 1em;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
`;

export const BotaoSegundario = styled.div`
  background-color: #FFFFFF;
  width: 40%;
  border-radius: 2px;
  padding: 5px;
  margin: 1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
`;

export const Botoes = styled.div`
  display: flex;
`;

export const TiposDeReciclagem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const StyledCard = styled(Card)`
  width: 18rem;
  margin: 0 10px;
  border: none;

  .card-header-paper {
    background-color: #4E97D1;
    color: white;
    text-align: center;
    font-weight: bold;
  }

  .card-header-plastic {
    background-color: #F20707;
    color: white;
    text-align: center;
    font-weight: bold;
  }

  .card-header-metal {
    background-color: #F2E307;
    color: white;
    text-align: center;
    font-weight: bold;
  }

  .card-header-glass {
    background-color: #2ABF40;
    color: white;
    text-align: center;
    font-weight: bold;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: solid 0.5px #ddd;
  }
`;

export const StyledButton = styled.div`
  margin-top: 10px;
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
