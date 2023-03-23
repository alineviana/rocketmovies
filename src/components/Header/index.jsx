import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Container, Search, Profile, Logout } from './styles';

export function Header({ children }) {    
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }
   
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <h1>RocketMovies</h1>

            <Search>
                {children}
            </Search>

            <Profile to="/profile">

            <div>
                <strong>{user.name}</strong>            
            </div>

            <img src={avatarUrl} alt="Foto do Usuário" />

            </Profile>

            <Logout onClick={handleSignOut}>
                sair
            </Logout>

        </Container>
    );
}