import React from "react";
import { NoDataStyle } from "../order/styles";
import envelope from "../../images/envelope.svg";
import { StyledTradeTable, StyledTradeRow, StyleAllTrade } from "./styles";

export default function Closed() {
    return(
        <StyleAllTrade>
            <StyledTradeTable>
                <thead>
                    <StyledTradeRow>
                        <th>Transaction</th>
                        <th>Security</th>
                        <th>Units</th>
                        <th>Order Price</th>
                        <th>Created</th>
                        <th>Matched</th>
                        <th>Type</th>
                        <th>Status</th>
                    </StyledTradeRow>
                </thead>
                
                <tbody>
                    <NoDataStyle>
                        <img src={envelope} alt="no data" />
                        <p>No data</p>
                    </NoDataStyle>
                </tbody>
            </StyledTradeTable>
        </StyleAllTrade>
    )
}