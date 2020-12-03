import React, { useState } from "react";
import { Route } from "react-router-dom";
import {
  StyledOverall,
  StyledAll,
  StyledDiv,
  StyledNav,
  StyledSelect,
  InnerDiv,
  SelectCover,
  StyledFNav,
  StyledOrder,
  StyledAllOrder,
  StyledTable,
  StyledRow,
  NoDataStyle
} from "../order/styles";
import envelope from "../../images/envelope.svg";
import { TradeNav, StyledAllTrade } from "./styles";

export default function Trade() {
  // const [length, setLength] = useState(3);
  // console.log(allSell)

  // function handleChange(e) {
  //     setLength({value: e.target.value});
  // }

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
    </StyledOverall>
  );
}

export function New() {
    return(
        <div>

        </div>
    )
}

export function Open() {
    return(
        <div>
            
        </div>
    )
}

export function Closed() {
    return(
        <div>
            
        </div>
    )
}