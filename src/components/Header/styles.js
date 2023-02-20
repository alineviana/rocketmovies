import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;
    height: 115px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    
    display: flex;
    justify-content: space-between;
    padding: 0 123px;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK_500};
        align-self: center;
    }
`;

export const Search = styled.div`
    width: 100%;
    padding: 0 64px;
    margin-top: 30px;
`;

export const Profile = styled(Link)`
    display: flexbox;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;

        strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;

    text-align: right;
`;