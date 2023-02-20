import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        
    border: none;

    > footer {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 12px;
        font-weight: 400;

        margin: 40px 0 0 32px;

    > span {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    }
`;