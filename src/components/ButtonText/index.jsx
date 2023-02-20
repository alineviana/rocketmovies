import { Container } from './styles';

export function ButtonText({ icon: Icon, title, ...rest}) {
    return(
        <Container
            type="button"
            {...rest}
        >
            {title}
        </Container>
    );
}