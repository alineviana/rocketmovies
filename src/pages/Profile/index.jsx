import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { ButtonText } from '../../components/ButtonText'; 
import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Profile() {
    const navigate = useNavigate();
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setpasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    function handleBack(){
        navigate(-1);
    }

    async function handleUpdate() {
        const update = {
            name, 
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, update); 

        await updateProfile({ user: userUpdated, avatarFile });

        handleBack();
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return(
        <Container>
            <header>
                <Link>
                    <FiArrowLeft />
                    <ButtonText 
                        title="Voltar"
                        onClick={handleBack} 
                    />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src={avatar}
                        alt="Foto do Usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            id="avatar" 
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>

                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={event => setpasswordOld(event.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={event => setPasswordNew(event.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>

            </Form>

        </Container>
    );
}