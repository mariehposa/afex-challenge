import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledOverall = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledAll = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 3px 5px 13px 5px rgba(82, 63, 105, 0.05);
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const InnerDiv = styled.div`
    display: flex;
    /* margin-top: 10px; */

    div {
        margin-left: 10px;
        margin-top: 13px;   
    }

    p {
        font-weight: bold;
    }
`

export const StyledNav = styled(NavLink)`
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #51965e;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    color: #51965e;
    background: #fff;
    text-transform: uppercase;
`

export const SelectCover = styled.div`
    margin-top: 20px;
    margin-left: 10rem;
`

export const StyledSelect = styled.select`
    width: 200px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    color: #d9d9d9;
`

export const StyledFNav = styled(NavLink)`
    border-color: #e1261c;
    background-color: #e1261c;
    color: #fff;
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
`

export const StyledAllOrder = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledOrder = styled.div`
    display: flex;
    /* flex-direction: column; */
`