import styled from 'styled-components';
import { ArrowDownOutline } from '@styled-icons/evaicons-outline/ArrowDownOutline';

export const Wrapper = styled.div`
    background-color: #ebf3f5;
    display: flex;
    border-radius: 10px;
    gap: 20px;
    flex: 1;
`;

export const AbilityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;

    p {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: capitalize;
    }
`;

export const StyledArrowDownOutline = styled(ArrowDownOutline)`
    width: 20px;
    height: 20px;
`;
