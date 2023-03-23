import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote() {
        
        if(!title) {
            return alert("Digite o título do filme!")
        }

        const ratingValid = rating >=0 && rating <=5;

        if(!ratingValid) {
            return alert("A sua nota para o filme deverá ser entre 0 e 5!")
        }

        if(!description) {
            return alert("Você deixou o campo Observações vazio. Deseja adicionar alguma informação?")
        }

        if(newTag) {
            return alert("Você deixou uma tag no campo adicionar, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio.");
        }

        await api.post("/notes", {
            title,
            rating,
            description,
            tags
        });

        alert("Novo filme cadastrado com sucesso!");
        navigate(-1);
    }

    function handleDeleteMovie() {
        
        const confirmation = alert("Todas as informações preenchidas serão perdidas. Tem certeza que deseja descartar as alterações?");
    
        if (confirmation) {
          navigate(-1);
        }
    }

    return(
        <Container>
            <Header />
            
            <main>
                <Form>
                    <Link>
                        <FiArrowLeft />
                        <ButtonText 
                            title="Voltar"
                            onClick={handleBack}
                        />
                    </Link>

                    <h1>Novo Filme</h1>

                    <div className="inputs">
                        <Input 
                            placeholder="Título"
                            onChange={event => setTitle(event.target.value)}
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            min="0"
                            max="5"
                            onChange={event => setRating(event.target.value)}
                        />
                    </div>

                    <Textarea 
                        placeholder="Observações"
                        onChange={event => setDescription(event.target.value)}
                    />

                    <Section title="Marcadores">
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <li>
                                        <NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => handleRemoveTag(tag)} 
                                        />
                                    </li>
                                )) 
                            }
                            <li>
                                <NoteItem 
                                    isNew 
                                    placeholder="Novo marcador"
                                    onChange={event => setNewTag(event.target.value)}
                                    value={newTag}
                                    onClick={handleAddTag}
                                />
                            </li>
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button 
                            id="delete" 
                            title="Excluir filme" 
                            onClick={handleDeleteMovie}
                        />
                        <Button 
                            id="save" 
                            title="Salvar alterações"
                            onClick={handleNewNote}
                        />
                    </div>

                </Form>
            </main>
            
        </Container>
    );
}