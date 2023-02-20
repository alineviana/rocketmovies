import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 115px auto;
    grid-template-areas: 
    "header"
    "content";

    a {
        color: ${({ theme }) => theme.COLORS.PINK_500};

        svg {
            margin-top: 40px;
            margin-left: 123px;
        }

        button {
            margin-left: 8px;
        }
    }
`;

export const Content = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    overflow-y: auto;

    margin-bottom: 25px;

    h1 {
        margin: 24px 0 0 123px;
    }

    footer {
        padding-left: 90px;
    }

    p {
        text-align: justify;

        margin: 48px 130px 0 123px;
    }
`;
