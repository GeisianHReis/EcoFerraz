import sobreImg from '../../assets/sobre.jpeg'
import { ImgTopo, SobreStyle } from './styles'

export function Sobre() {
    return (
        <SobreStyle>
            <ImgTopo src={sobreImg} />
            <h1 >Entenda o projeto EcoFerraz</h1>
            <h3>
                EcoFerraz: Unindo Recicladores e Cidadãos para um Futuro Sustentável
            </h3>
            <p>
                EcoFerraz é mais que uma plataforma onine, é um projeto inovador que visa revolucionar a gestão de residuos sólidos em Ferraz de Vasconcelos, conectando de forma
                eficiente e transparente recdadores e cidadãos. Através de uma interface intuiiva e amigável, o EcoFerraz oferece uma solução prática e sustentável para o descarte de
                materiais recidáveis, promovendo a coleta seletiva e a preservação do meio ambiente.
            </p>
            <h3>
                EcoFerraz representa um marco na busca por um futuro mais verde e sustentável
            </h3>
            <p>
                <h4>
                    Facilidade e praticidade
                </h4>
                O descarte de materiais recicláveis se toma simples e acessivel a todos, bastando alguns diques na plataforma.
            </p>
            <p>
                <h4>
                    Transparência e segurança
                </h4>
                O EcoFerraz garante a rastreablidade dos materiais coletados, desde o descarte até a destinação final, assegurando que os residuos sejam recidados de forma coreta e
                responsavel.
            </p>
            <p>
                <h4>
                    Renda e inclusão social
                </h4>
                A plataforma impusiona a geração de renda para os recicladores locais, fortalecendo a economia circular e promovendo a inclusão social.
            </p>
            <p>
                <h4>
                    Educação ambiental
                </h4>
                O EcoFerraz promove a conscientização ambiental da população, incentivando a prática da coleta seletiva e a responsabilidade ambiental.
            </p>
            <h3>O impacto positivo do EcoFerraz para os ferrazenses:</h3>
            <p>
                <h4>
                    Meio ambiente
                </h4>
                A plataforma contribui para a redução do volume de lo nos aterros sanitários, diminuindo a poluição do solo e dos recursos hídricos.
            </p>
            <p>
                <h4>
                    Saúde pública
                </h4>
                A coleta seletiva e a reciclagem contribuem para a diminuição de doenças transmitidas por vetores, como dengue e leptospirose, promovendo um ambiente mais
                saudável para a população.
            </p>
            <p>
                <h4>
                    Economia
                </h4>
                O EcoFerraz impulsiona a criação de novos negócios e oportunidades de trabalho na área da recidagem, gerando renda e fortalecendo a economia local
            </p>
            <p>
                Este Projeto é um convite à ação, um chamado para que todos os cidadãos ferrazenses se unam na construção de um futuro mais verde e sustentável. Ao utiizar a
                plataforma, você contribui para a proteção do meio ambiente, o desenvolvimento da economia local e a promoção da indusão social.
            </p>
        </SobreStyle>
    )
}