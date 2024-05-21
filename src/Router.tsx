import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Sobre } from "./Pages/Sobre";
import { Contato } from "./Pages/Contato";
import { Cadastro } from "./Pages/Cadastro";
import Blog from "./Pages/Blog";
import ListagemBlog from "./Pages/ListagemBlog";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route index path="/home" element={<Home />} />
            <Route index path="/sobre" element={<Sobre />} />
            <Route index path="/contato" element={<Contato />} />
            <Route index path="/cadastro" element={<Cadastro />} />
            <Route path="/blog" element={<ListagemBlog/>} />
            <Route path="/blog/:postType" element={<Blog />} />
        </Routes>
    )
}