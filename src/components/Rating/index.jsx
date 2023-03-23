import { Container } from './styles';
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

export function Rating({ grade }) {
    let stars = [];
    
    for(let i = 1; i <= 5; i++) {
        if(i <= grade) {
            stars.push(
                <RiStarSFill key={i} />
            )
        } else {
            stars.push(
                <RiStarSLine key={i} />
            )
        }
    }
    
    return(
        <Container>
            {stars}
        </Container>
    );
}