import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export function New() {
    return(
        <Container>
            <Header />
            
            <main>
                <Form>
                    <Link to="/">
                        <FiArrowLeft />
                        <ButtonText title="Voltar" />
                    </Link>

                    <h1>Novo Filme</h1>

                    <div className="inputs">
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />

                    <Section title="Marcadores">
                        <div className='tags'>
                            <li><NoteItem value="Action" /></li>
                            <li><NoteItem isNew placeholder="Novo marcador" /></li>
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button id="delete" title="Excluir filme" />
                        <Button id="save" title="Salvar alterações" />
                    </div>

                </Form>
            </main>
            
        </Container>
    );
}