import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    > button {
        width: 96px;
        height: 30px;

        border-radius: 8px;

        /* background-color: ${({ theme }) => theme.COLORS.PINK_500}; */
        color: ${({ theme }) => theme.COLORS.PINK_500};

        margin-top: 152px;
        position: absolute;
        right: 114px;
        font-size: 16px;
    }
`;

export const Content = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    height: 450px;
    margin-right: 106px;
    
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 0.45rem;               
    }
  
    ::-webkit-scrollbar-track {
        background: transparent;        
    }
    ::-webkit-scrollbar-thumb {  
        border-radius: 2rem;
        border: 0.3px solid ${({ theme }) => theme.COLORS.PINK_500};    
    }

    div {
        display: flex;

        svg {
            display: flex;
            align-items: center;
            align-content: center;

            width: 25px;
            height: 25px;

            margin-top: 36px;
            margin-left: 8px;
        }

        svg:first-of-type {
            margin-left: 20px;
        }
    }

    h1 {
        font-size: 36px;
        margin: 24px 0 0 123px;
    }
    
    p {
        text-align: justify;

        margin: 40px 24px 0 123px;
    }
  
    span:first-of-type {
        margin-left: 123px;
    }
`;

export const Profile = styled(Link)`
    
    img {
        width: 16px;
        height: 16px;

        border-radius: 50%;

        margin: 24px 0 0 123px;
    }

    strong {
        font-size: 16px;
        font-weight: 400;
        
        margin: 24px 0 0 8px;
        
        color: ${({ theme }) => theme.COLORS.WHITE};

        svg {
            margin-right: 8px;
            color: ${({ theme }) => theme.COLORS.PINK_500};
        }
    }    
`;