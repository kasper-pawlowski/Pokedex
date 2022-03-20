import styled from 'styled-components';
import { Ruler } from '@styled-icons/fluentui-system-regular/Ruler';
import { MonitorWeight } from '@styled-icons/material-outlined/MonitorWeight';

export const Wrapper = styled.div`
    margin-top: 30px;
    width: fit-content;
    background-color: #ebf3f5;
    display: flex;
    align-items: center;
    padding: 30px 20px;
    gap: 30px;
    border-radius: 10px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0px;

        p {
            font-weight: 500;
            display: flex;
            gap: 5px;
        }

        span {
            color: #2e3057af;
        }
    }
`;

export const Line = styled.div`
    height: 70%;
    width: 2px;
    border-radius: 10px;
    background-color: #2e305750;
`;

export const StyledRuler = styled(Ruler)`
    width: 22px;
`;

export const StyledWeight = styled(MonitorWeight)`
    width: 22px;
`;