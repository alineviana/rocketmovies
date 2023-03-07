import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo o que assistir</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={event => setEmail(event.target.value)}
                />
                
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={event => setPassword(event.target.value)}
                />
                
                <Button  title="Entrar" onClick={handleSignIn} />

                <Link to="/register">
                    Criar conta
                </Link>

            </Form>

        <Background />

        </Container>
    );
}