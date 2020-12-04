import React from "react";
import { Route } from "react-router-dom";
import { StyledOverall, StyledSelect, SelectCover } from "../order/styles";
import { TradeNav, StyledAllTrade } from "./styles";
import New from './new_trade';
import Open from './open_trade';
import Closed from './closed_trade';

export default function Trade() {
  return (
    <StyledOverall>
      <StyledAllTrade>
        <div>
            <TradeNav to="/trade">New Trade</TradeNav>
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
        <Route path={["/", "/trade"]} component={New} />
        <Route path="/open" component={Open} />
        <Route path="/closed" component={Closed} />
      </>
    </StyledOverall>
  );
}