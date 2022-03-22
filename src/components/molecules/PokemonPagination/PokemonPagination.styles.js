import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { types, typesLight } from 'helpers/types';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

export const Wrapper = styled.div`
    width: fit-content;
    /* height: 100%; */
    /* background-color: #ebf3f5; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    border-radius: 10px;
    grid-area: Pagination;
`;

export const CurrentId = styled.p`
    color: ${({ type }) => types(type)};
    transition-duration: 0.2s;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    font-family: 'JetBrains Mono', monospace;
    display: flex;
    align-self: center;
    color: #2e305791;
    font-size: 14px;
    pointer-events: ${({ id }) => (id <= '1' ? 'none' : 'auto')};

    button {
        background: none;
        border: none;
        font-size: 14px;
        font-family: 'JetBrains Mono', monospace;
    }
`;

export const StyledArrowIosUpwardOutline = styled(ArrowIosUpwardOutline)`
    width: 30px;
    width: ${StyledLink.width};
    color: #2e305791;
`;
export const StyledArrowIosDownwardOutline = styled(ArrowIosDownwardOutline)`
    width: 30px;
    width: ${StyledLink.width};
    color: #2e305791;
`;