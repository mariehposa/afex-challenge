import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const TradeNav = styled(NavLink)`
    margin: 0 5px;
    padding: 5px 0px;
    padding-bottom: 32px;
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
    padding: 10px 20px;
    background: #fff;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    box-shadow: 3px 5px 13px 5px rgba(82, 63, 105, 0.05);
    border-bottom: 1px solid #e8e8e8;

    div:first-child {
        margin-top: 20px;
    }
`

export const StyledTradeTable = styled.table`
    display: flex;
    flex-direction: column;
    /* border: 1px solid #e8e8e8; */
    border-radius: 4px;
    padding: 5px;
    background: #fff;
    box-shadow: 3px 5px 13px 5px rgba(82, 63, 105, 0.05);
    border: 1px solid #e8e8e8;
    margin: 30px 10px;
    width: 100%;
    margin-bottom: 0;

    thead {
        tr {
            border-bottom: 1px solid #e8e8e8 !important;
        }
    }
`

export const StyledTradeRow = styled.tr`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e8e8e8;
    padding: 15px 7px;
    text-align: left;

    :first-child {
        border: none;
    }

    th, td {
        width: 10%;
        font-size: 13px;
    }
`

export const StyleAllTrade = styled.div`
    display: flex;
    background: #fff;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-bottom: 30px;
    box-shadow: 3px 5px 13px 5px rgba(82,63,105,0.05);
`

export const StyledNew = styled.div`
    display: flex;
    margin-top: 25px;
    margin-left: 30px;

    button {
        border: 1px solid #e1261c;
        background-color: #fff;
        color: #e1261c;
        margin: 0 7px;
        padding: 6px 12px;
        border-radius: 5px;
        cursor: pointer;
        height: 30px;
        font-size: 14px;

        &:focus {
            background-color: #e1261c;
            color: #fff;
        }
    }

    p {
        font-weight: 300;
        font-size: 15px;
        margin-top: 5px;
        margin-left: 7px;
    }
`

export const StyledP = styled.p `
    color: #e1261c;
    font-weight: 500 !important;
    font-size: 18px !important;
`

export const StyledTradeSelect = styled.select`
    width: 200px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    color: #000;
`

export const SelectTradeCover = styled.div`
    margin-top: 20px;
    margin-left: 2rem;
`

export const StyledBuyOrder = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-bottom: 30px;
    box-shadow: 3px 5px 13px 5px rgba(82,63,105,0.05);
`
export const Coverall = styled.div`
    width: 60%;
    align-self: center;
    margin-top: 30px;
`

export const FirstDiv = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        color: #e1261c;
        font-weight: 600
    }

    span {
        color: rgba(0,0,0,.65);
        font-weight: 300
    }

    button {
        background: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        color: rgba(0,0,0,.65);
        height: 10vh;
        cursor: pointer;
    }

    img {
        width: 15px;
        margin-right: 5px;
        margin-bottom: -3px;
    }
`

export const SecondDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    select, input {
        width: 250px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #d9d9d9;
        margin-top: -5px;
    }

    input {
        width: 230px !important;
        background: #fff;
    }

    span {
        font-weight: 600;
        color: #000;
    }
`

export const ThirdDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    button {
        padding: .5rem 3rem;
        border-radius: 3px;
        background-color: #51965e;
        border: 1px solid #51965e;
        color: #fff;
        cursor: pointer;
    }

    button:first-child {
        background-color: #d9d9d9;
        color: rgba(0,0,0,.65);
        border: 1px solid #d9d9d9;
    }
`

export const StyledPrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -5px;

    p {
        font-size: 11px;
        color: #e1261c;
    }

    span {
        color: #51965e;
    }
`