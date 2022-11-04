import { css } from 'lit';

export const btnStyles = () => css`
    .lit-btn {
        padding: var(--size, 10px);
    }

    .lit-btn--small {
        --size: 10px;
    }

    .lit-btn--medium {
        --size: 25px;
    }

    .lit-btn--large {
        --size: 50px;
    }
`;