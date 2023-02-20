import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Menu = styled.div`
    display: grid;
    grid-template-columns: auto 207px;
    grid-template-areas: 
    "header"
    "button";

    align-items: center;

    margin: 50px 106px 40px 123px;
`;

export const NewFilm = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.PINK_500};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    border-radius: 8px;

    font-size: 16px;
    font-weight: 400;

    svg {
        margin-right: 8px;
    }
`;

export const Content = styled.div`
    margin: 0 106px 0 123px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    div {
        height: 223px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_850};

        border-radius: 16px;

        margin-bottom: 24px;

        h1 {
            margin-left: 32px;
            padding-top: 32px;
        }

        p {
            height: 50px;
            margin-left: 32px;
            padding-top: 15px;
        }
    }
`;
