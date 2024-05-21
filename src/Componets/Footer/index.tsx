import { useNavigate } from "react-router-dom";
import { FooterStyle, MenuColumn, MenuItem } from "./styles";

export function Footer() {
    const navigate = useNavigate();
    return (
        <FooterStyle>
            <MenuColumn>
                <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                <MenuItem onClick={() => navigate("/sobre")}>Sobre o Projeto</MenuItem>
                <MenuItem onClick={() => navigate("/cadastro")}>Cadastre-se</MenuItem>
                <MenuItem onClick={() => navigate("/contato")}>Fale Conosco</MenuItem>
            </MenuColumn>
        </FooterStyle>
    );
}
