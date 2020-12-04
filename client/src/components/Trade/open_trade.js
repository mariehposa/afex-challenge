import React from "react";
import { NoDataStyle } from "../order/styles";
import envelope from "../../images/envelope.svg";
import { StyledTradeTable, StyledTradeRow, StyleAllTrade } from "./styles";

export default function Open() {
    return(
        <StyleAllTrade>
            <StyledTradeTable>
                <thead>
                    <StyledTradeRow>
                        <th>Transaction</th>
                        <th>Security</th>
                        <th>Units</th>
                        <th>Matched Units</th>
                        <th>Open Units</th>
                        <th>Order Price</th>
                        <th>Created</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Actions</th>
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