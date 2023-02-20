import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;

        

        svg {
            color: ${({ theme }) => theme.COLORS.PINK_500};        
            margin-right: 8px;
        }
    }

    .inputs {
        display: grid;
        justify-content: space-between;

        grid-template-columns: 550px 550px;
        grid-template-areas: "input input";

        margin-top: 40px;
        margin-bottom: 30px;
    }

    .tags {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        
        height: 88px;
        border-radius: 8px;

        li {
            padding-left: 16px;
            list-style: none;

            align-self: center;
            align-items: center;
        }

        span {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
    }

    .buttons {
        display: grid;
        justify-content: space-between;

        grid-template-columns: 550px 550px;
        grid-template-areas: 
        "button"
        "button";

        #delete {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.PINK_500};
        }
    }
`;

export const Form = styled.form`
    max-width: 1137px;
    margin: 38px auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: flex-start;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 24px;
    }
`;

