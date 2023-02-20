import { Container, Menu, NewFilm, Content } from './styles';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { FiPlus } from 'react-icons/fi';

export function Home() {
    return(
        <Container>
            <Header/>

            <Menu>

                <h1>Meus filmes</h1>

                <NewFilm to="/new">
                    <FiPlus />
                    Adicionar filme
                </NewFilm>

            </Menu>

            <Content>
            
                    <Note data={{ 
                        title: 'Interestellar',
                        rest: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}
                        ]
                    }}
                    />
            
                    <Note data={{ 
                        title: 'Interestellar',
                        rest: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}
                        ]
                    }}
                    />

                    <Note data={{ 
                        title: 'Interestellar',
                        rest: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida.',
                        tags: [
                            {id: '1', name: 'Ficção Científica'},
                            {id: '2', name: 'Drama'},
                            {id: '3', name: 'Família'}
                        ]
                    }}
                    />
                    
            </Content>

        </Container>
    );
}