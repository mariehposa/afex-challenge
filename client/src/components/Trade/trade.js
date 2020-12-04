import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { StyledOverall, StyledSelect, SelectCover, NoDataStyle } from "../order/styles";
import envelope from "../../images/envelope.svg";
import BuyOrder from './buy_order'
import {
  TradeNav,
  StyledAllTrade,
  StyledTradeTable,
  StyledTradeRow,
  StyleAllTrade,
  StyledTradeSelect,
  StyledNew,
  StyledP,
  SelectTradeCover
} from "./styles";
import New from './new_trade';

export default function Trade() {
  return (
    <StyledOverall>
      <StyledAllTrade>
        <div>
            <TradeNav to="/">New Trade</TradeNav>
            <TradeNav to="/open">Open Trades</TradeNav>
            <TradeNav to="/closed">Closed Trades</TradeNav>
        </div>

        <SelectCover>
          <StyledSelect>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </StyledSelect>
        </SelectCover>
      </StyledAllTrade>

      <>
        <Route exact path="/" component={New} />
        <Route path="/open" component={Open} />
        <Route path="/closed" component={Closed} />
      </>
      {/* <BuyOrder /> */}
    </StyledOverall>
  );
}

export function Open() {
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

export function Closed() {
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