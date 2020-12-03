import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const TradeNav = styled(NavLink)`
    margin: 0 5px;
    padding: 5px 0px;
    padding-bottom: 28px;
    cursor: pointer;
    text-decoration: none;
    color: #6c7293;

    &:focus {
        color: #51965e;
        border-bottom: 1px solid #51965e;
    }

    &:hover {
        color: #51965e;
        border-bottom: 1px solid #51965e;
    }
`

export const StyledAllTrade = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    padding: 5px 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 3px 5px 13px 5px rgba(82, 63, 105, 0.05);

    div:first-child {
        margin-top: 20px;
    }
`