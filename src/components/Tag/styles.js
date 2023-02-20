import styled from 'styled-components';

export const Container = styled.span`
    font-size: 16px;
    padding: 5px 14px;
    border-radius: 5px;
    margin-right: 6px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.PINK_200};
`;