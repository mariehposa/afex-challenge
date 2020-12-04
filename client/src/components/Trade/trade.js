import React, { useState } from "react";
import { Route } from "react-router-dom";
import {
  StyledOverall,
  StyledSelect,
  SelectCover,
  NoDataStyle
} from "../order/styles";
import envelope from "../../images/envelope.svg";
import {
  TradeNav,
  StyledAllTrade,
  StyledTradeTable,
  StyledTradeRow,
  StyleAllTrade,
  StyledTradeSelect,
  StyledNew,
} from "./styles";

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
        <StyleAllTrade>
            <StyledNew>
                <button>Buy</button>
                <button>sell</button>
                <p>for</p>
                <p>Spot</p>
            </StyledNew>
            <SelectCover>
                <StyledTradeSelect>
                    <option value="">Select Commodity</option>
                    <option value="fetc">Fair Trade ETC FETC</option>
                    <option value="ssbs">Soybean SSBS</option>
                    <option value="ssgm">Sorghum SSGM</option>
                    <option value="smaz">Maize SMAZ</option>
                    <option value="cexp">Export Note CEXP</option>
                    <option value="sprl">Paddy Rice SPRL</option>
                    <option value="scoc">Cocoa SCOC</option>
                </StyledTradeSelect>
            </SelectCover>
        </StyleAllTrade>
    )
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