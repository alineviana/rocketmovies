import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.WHITE}` : 'none'};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.PINK_500};
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.PINK_500};
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;