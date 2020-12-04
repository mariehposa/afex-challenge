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
    font-weight: 600;

    &:focus {
        color: #fff;
        background: #51965e;
    }
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
    justify-content: space-between;
    background: #fff;
    border-radius: 4px;
    margin-top: 30px;
    padding-bottom: 30px;
    box-shadow: 3px 5px 13px 5px rgba(82,63,105,0.05);
`

export const StyledOrder = styled.div`
    display: flex;
    flex-direction: column;
    width: 46%;
    /* margin-top: 30px; */
    padding: 10px 15px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 3px 5px 13px 5px rgba(82, 63, 105, 0.05);
    padding-bottom: 30px;

    p {
        font-weight: 600;
        font-size: 16px;
        margin-left: 6px;
    }
`

export const StyledTable = styled.table`
    display: flex;
    flex-direction: column;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding: 5px;
    /* border-bottom: 0; */
    padding-bottom: 0;

    thead {
        tr {
            border-bottom: 1px solid #e8e8e8 !important;
        }
    }
`

export const StyledRow = styled.tr`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e8e8e8;
    padding: 15px 7px;
    text-align: left;

    :first-child {
        border: none;
    }

    &:hover {
        background-color: rgba(81, 150, 94, 0.2);
        /* opacity: 0.5; */
        transition: background-color .4s ease-in;
    }

    th, td {
        width: 21%;
    }

    td:first-child {
        width: 37%;
    }

    th:first-child {
        width: 37%;
    }
`

export const Disable = styled.td`
    font-size: 12px;
    opacity: 0.6;
`

export const BuyButton = styled.button`
    padding: 6px 10px;
    border: 1px solid #51965e;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    background: #51965e;
    margin-left: 30px;
    text-align: center;
`

export const NoDataStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    padding-top: 50px;

    p {
        font-weight: 100;
        font-size: 14px;
        opacity: .5;
    }
`

export const FancyButton = styled.button`
  margin: 0 5px;
  /* padding: 5px 10px; */
  border: 1px solid #51965e;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #51965e;
  /* height: 25px; */
  background: #fff;
  text-transform: uppercase;
  font-weight: 400;  
  
  ${({ active }) =>
    active &&
    `
    color: #fff;
    background: #51965e;
  `}
`;