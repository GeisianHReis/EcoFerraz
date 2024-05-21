import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { BeerBottle, Champagne, Exam, Magnet } from "@phosphor-icons/react";
import {
  BotaoPrincipal,
  BotaoSegundario,
  Botoes,
  ImgMulher,
  TextoPrincipal,
  TextoSecundario,
  Textos,
  TiposDeReciclagem,
  Titulo,
  Topo,
  StyledCard,
  StyledButton
} from "./styles";

import imgMulher from '../../assets/WhatsApp_Image_2024-05-14_at_00.09.02-removebg-preview.png';

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Topo>
        <Textos>
          <TextoPrincipal>Olá, que bom ter você Aqui!</TextoPrincipal>
          <TextoSecundario>
            Seja bem vindo (a) ao nosso
            projeto Eco Ferraz
          </TextoSecundario>
          <Botoes>
            <BotaoPrincipal onClick={() => navigate("/cadastro")}>PARTICIPE DO PROJETO</BotaoPrincipal>
            <BotaoSegundario onClick={() => navigate("/sobre")}>CONHEÇA O PROJETO</BotaoSegundario>
          </Botoes>
        </Textos>
        <ImgMulher src={imgMulher} />
      </Topo>
      <Titulo>Conheça os tipos de recicláveis</Titulo>
      <TiposDeReciclagem>
        <StyledCard>
          <Card.Header className="card-header-paper">Papel</Card.Header>
          <Card.Body>
            <Card.Title><Exam size={32} /></Card.Title>
            <Card.Text>
              A reciclagem de papel é o processo de transformar papel usado ou descartado em novos produtos de papel.
            </Card.Text>
            <StyledButton onClick={() => navigate("/blog/papel")}>Ler mais »</StyledButton>
          </Card.Body>
        </StyledCard>

        <StyledCard>
          <Card.Header className="card-header-plastic">Plástico</Card.Header>
          <Card.Body>
            <Card.Title><BeerBottle size={32} /></Card.Title>
            <Card.Text>
            A reciclagem de plástico é o processo de transformar resíduos plásticos em novos produtos.
            </Card.Text>
            <StyledButton onClick={() => navigate("/blog/plastico")}>Ler mais »</StyledButton>
          </Card.Body>
        </StyledCard>

        <StyledCard>
          <Card.Header className="card-header-metal">Metal</Card.Header>
          <Card.Body>
            <Card.Title><Magnet size={32} /></Card.Title>
            <Card.Text>
            A reciclagem de metal é o processo de transformar resíduos metálicos em novos produtos de metal.
            </Card.Text>
            <StyledButton onClick={() => navigate("/blog/metal")}>Ler mais »</StyledButton>
          </Card.Body>
        </StyledCard>

        <StyledCard>
          <Card.Header className="card-header-glass">Vidro</Card.Header>
          <Card.Body>
            <Card.Title><Champagne size={32} /></Card.Title>
            <Card.Text>
            A reciclagem de vidro é o processo de transformar cacos de vidro em novos produtos de vidro.
            </Card.Text>
            <StyledButton onClick={() => navigate("/blog/vidro")}>Ler mais »</StyledButton>
          </Card.Body>
        </StyledCard>
      </TiposDeReciclagem>
    </>
  );
}
