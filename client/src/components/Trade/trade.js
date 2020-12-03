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

export default function Trade() {
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