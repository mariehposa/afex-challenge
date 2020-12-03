import React, { useState } from "react";
import { Route } from "react-router-dom";
import { BuyCard, SellCard } from "./card";
import {
  allBuy,
  allSell,
  fetcBuy,
  fetcSell,
  scocBuy,
  scocSell,
  smazBuy,
  smazSell,
  sprlBuy,
  sprlSell,
  ssbsBuy,
  ssgmSell,
  ssgmBuy,
} from "../../data/data";
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
} from "./styles";
import envelope from "../../images/envelope.svg";

export default function Order() {
  // const [length, setLength] = useState(3);
  // console.log(allSell)

  // function handleChange(e) {
  //     setLength({value: e.target.value});
  // }

  return (
    <StyledOverall>
      <StyledAll>
            <div>
              <StyledNav to="/">New Trade</StyledNav>
              <StyledNav to="/open">Open Trades</StyledNav>
              <StyledNav to="/closed">Closed Trades</StyledNav>
            </div>

        <SelectCover>
          <StyledSelect>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="20">30</option>
            <option value="20">50</option>
            <option value="20">100</option>
          </StyledSelect>
        </SelectCover>
      </StyledAll>

      <>
        <Route exact path="/" component={New} />
        <Route path="/open" component={Open} />
        <Route path="/closed" component={Closed} />
      </>
    </StyledOverall>
  );
}