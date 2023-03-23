import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
        
    border: none;
    border-radius: 16px;

    padding: 32px;
    margin: 0 8px 24px 0;

    h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};

        text-align: left;
        font-size: 24px;
    }

    div {
        background-color: transparent;
        height: 15px;

        margin-top: 8px;
    }

    p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    
        margin: 15px 0 25px;
        text-align: justify;
    
        overflow: hidden;
        text-overflow: ellipsis;
    
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    footer {
        display: flex;

        span {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

    }
`;