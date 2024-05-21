import { Card } from 'react-bootstrap'
import Atendente from '../../assets/atendente-Photoroom.png-Photoroom.png'
import { CanaisDeContato, ContatoStyle, FaixaMeio } from './styles'
import { Envelope, Phone, WhatsappLogo } from '@phosphor-icons/react'

export function Contato() {
    return (
        <ContatoStyle>
            <img src={Atendente} width={'20%'} />
            <FaixaMeio>
                Escolha um dos canais de comunicação abaixo e envie-nos suas
                dúvidas, críticas ou sugestões
            </FaixaMeio>
            <CanaisDeContato>

                <Card border="primary" style={{ width: '18rem'}}>
                    <Card.Header style={{backgroundColor:'#F18D1B', display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50px' }}> <Envelope size={32} /></Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            atendimento@ferrazeco.com.br
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header style={{backgroundColor:'#2ABF40', display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50px' }}> <WhatsappLogo size={32} /> </Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            (11) 99999999
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header style={{backgroundColor:'#D2D2D2', display: 'flex', alignItems: 'center', justifyContent: 'center', height:'50px' }}> <Phone size={32} /> </Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            (11) 00000000
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CanaisDeContato>
        </ContatoStyle>
    )
}