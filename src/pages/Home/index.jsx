import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Container, Menu, NewFilm, Content } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Note } from '../../components/Note';

export function Home() {
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);
    
    const navigate = useNavigate();

    function handlePreview(id) {
        navigate(`/preview/${id}`);
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }

        fetchNotes();
        
    }, [search]);

    return(
        <Container>
            
            <Header>
                <Input 
                    placeholder="Pesquisar pelo título" 
                    icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>                 

            <Menu>
                <h1>Meus filmes</h1>

                <NewFilm to="/new">
                    <FiPlus />
                    Adicionar filme
                </NewFilm>

            </Menu>          

            <Content>
                    {
                        notes.map(note => (
                            <Note
                                key={String(note.id)} 
                                data={note}
                                onClick={() => handlePreview(note.id)}
                            />    
                        ))
                    }
            </Content>

        </Container>
    );
}