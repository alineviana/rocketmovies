import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    svg {
        height: 20px;
        width: 20px;

        color: ${({ theme }) => theme.COLORS.PINK_500};
    }
`;