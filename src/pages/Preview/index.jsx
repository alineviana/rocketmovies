import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container, Content, Profile } from './styles';
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText'; 
import { Rating } from '../../components/Rating';
import { BsStopwatch } from "react-icons/bs";
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Preview() {
    const [data, setData] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleBack(){
        navigate(-1);
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }

        fetchNote();
        
    }, []);
    
    return(
        <Container>
            <Header />

            <Link>
                <FiArrowLeft />
                <ButtonText 
                    title="Voltar"
                    onClick={handleBack} 
                />
            </Link>
            
            {
                data && 
                <main>
                    <Content>     

                    <div>
                        <h1>{data.title}</h1> 
                        <Rating grade={data.rating} />
                    </div>

                    <Profile>

                        <img src={avatarUrl} alt="Foto do Usuário" />
                        <strong> 
                            Por {user.name}
                            <BsStopwatch /> 
                            {data.created_at}
                        </strong>
         
                    </Profile>

                    {
                        data.tags &&
                        <Section>
                            {
                                data.tags.map(tag => (
                                    <Tag  
                                        key={String(tag.id)}
                                        title={tag.name}
                                    />
                                ))
                            }
                        </Section>
                    }     

                    <p>{data.description}</p>
                
                    </Content>
                </main>
            }

        </Container>
    );
}