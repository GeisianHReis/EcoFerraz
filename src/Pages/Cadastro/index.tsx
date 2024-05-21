import { useState } from "react";
import imgReciclador from "../../assets/WhatsApp Image 2024-05-14 at 00.09.02.jpeg";
import { Forms, Reciclador } from "./styles";
import { supabase } from '../../supabaseClient';
import sgMail from '../../sendGridClient';
import './form.css';

export function Cadastro() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [termos, setTermos] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nome || !endereco || !email || !celular || !mensagem || !termos) {
            alert('Por favor, preencha todos os campos e aceite os termos de uso');
            return;
        }

        const { data, error } = await supabase
            .from('usuarios')
            .insert([
                { nome, endereco, email, celular, mensagem, termos }
            ]);

        if (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Telefone e/ou e-mail já cadastrado, tente novamente.');
        } else {
            console.log('Dados enviados com sucesso:', data);
            alert('Dados enviados com sucesso!');
        }

        const welcomeEmail = {
            to: email,
            from: 'geisian.hreis@gmail.com',
            subject: 'Bem-vindo à nossa plataforma!',
            text: `Olá ${nome},\n\nObrigado por se cadastrar na nossa plataforma. Estamos felizes em tê-lo conosco!\n\nAtenciosamente,\nEquipe`,
        };

        const adminNotificationEmail = {
            to: 'gordynho007@gmail.com',
            from: 'gordo.kah@gmail.com',
            subject: 'Novo usuário cadastrado',
            text: `Um novo usuário se cadastrou na plataforma.\n\nNome: ${nome}\nEmail: ${email}\nCelular: ${celular}\nMensagem: ${mensagem}`,
        };

        try {
            await sgMail.send(welcomeEmail);
            await sgMail.send(adminNotificationEmail);
            console.log('Emails enviados com sucesso.');
        } catch (emailError) {
            console.error('Erro ao enviar emails:', emailError);
        }
    };
    return (
        <Forms>
            <Reciclador>
                <img src={imgReciclador} width={'100%'} />
                <div className="extended-register-form">
                    <h2>Cadastro de Usuário</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Digite seu nome"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço</label>
                            <input
                                type="text"
                                id="endereco"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                                placeholder="Digite seu endereço"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite seu email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="celular">Celular</label>
                            <input
                                type="tel"
                                id="celular"
                                value={celular}
                                onChange={(e) => setCelular(e.target.value)}
                                placeholder="Digite seu celular"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea
                                id="mensagem"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                placeholder="Digite sua mensagem"
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={termos}
                                    onChange={(e) => setTermos(e.target.checked)}
                                />
                                Aceito os termos de uso
                            </label>
                        </div>
                        <button type="submit" className="btn-submit">Enviar</button>
                    </form>
                </div>
            </Reciclador>
        </Forms>
    )
}