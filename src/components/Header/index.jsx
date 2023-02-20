import { Container, Search, Profile, Logout } from './styles';
import { Input } from '../Input';
import { FiSearch } from 'react-icons/fi';

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Profile to="/profile">

            <div>
                <strong>Aline Viana</strong>
                
            <Logout>
                sair
            </Logout>
            
            </div>

            <img src="https://github.com/alineviana.png" alt="Foto do Usuário" />

            </Profile>

        </Container>
    );
}