import React, { useState, useEffect } from "react";
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
  NoDataStyle,
} from "./styles";
import envelope from "../../images/envelope.svg";
import OptionButtons from "../custom/optionButton";

export default function Order() {
  const [limit, setLimit] = useState(3);
  const [data, setData] = useState(allBuy);
  const [sellData, setSellData] = useState(allSell);
  const [toggles, setToggles] = useState([]);  useEffect(() => {
    var a = [];
    var b = [];
    if (toggles.length > 0) {
      toggles.forEach((t) => {
        const c = allBuy.filter((dataItem) =>
          dataItem.security.toLowerCase().includes(t)
        );
        a = a.concat(c);        const d = allSell.filter((dataItem) =>
          dataItem.security.toLowerCase().includes(t)
        );
        b = b.concat(d);
      });
    } else {
      a = [...allBuy];
      b = [...allSell];
    }
    setData(a.slice(0, limit));
    setSellData(b.slice(0, limit));
  }, [toggles, limit]);

  return (
    <StyledOverall>
      <StyledAll>
        <StyledDiv>
          <InnerDiv>
            <p>Market:</p>
            <div>
              <StyledFNav to="/">Spot</StyledFNav>
            </div>
          </InnerDiv>
          <InnerDiv>
            <p>Boards:</p>
            <div>
              <OptionButtons
                options={[
                  "all",
                  "ssbs",
                  "ssgm",
                  "smaz",
                  "cexp",
                  "sprl",
                  "scoc",
                  "fetc",
                ]}
                onSelect={(selected) => {
                  if (toggles.includes(selected)) {
                    const a = toggles.filter((a) => a != selected);
                    setToggles(a);
                  } else {
                    setToggles(toggles.concat(selected));
                  }                  if (selected == "all") {
                    setToggles([]);
                  }
                }}
                selected={toggles}
              />
            </div>
          </InnerDiv>
        </StyledDiv>

        <SelectCover>
          <StyledSelect
              onChange={(event) => {
                const value = parseInt(event.target.value);
                setLimit(value);
              }}
              value={limit}
            >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="20">30</option>
            <option value="20">50</option>
            <option value="20">100</option>
          </StyledSelect>
        </SelectCover>
      </StyledAll>

    <StyledAllOrder>
      <StyledOrder>
        <p>Buy Orders</p>
        <StyledTable>
            <thead>
                <StyledRow>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                    <th></th>
                </StyledRow>
            </thead>

            <tbody>
                {data.length > 0 ? (
                    data.map((data) => <BuyCard key={data.id} data={data} />)
                  ) : (
                <NoDataStyle>
                    <img src={envelope} alt="no data" />
                    <p>No data</p>
                </NoDataStyle>
                )}
            </tbody>
        </StyledTable>
      </StyledOrder>
      <StyledOrder>
        <p>Sell Orders</p>
        <StyledTable>
            <thead>
                <StyledRow>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                    <th></th>
                </StyledRow>
            </thead>
            
            <tbody>
                {sellData.length > 0 ? (
                    sellData.map((data) => <SellCard key={data.id} data={data} />)
                  ) : (
                <NoDataStyle>
                    <img src={envelope} alt="no data" />
                    <p>No data</p>
                </NoDataStyle>
                )}
            </tbody>
        </StyledTable>
      </StyledOrder>
    </StyledAllOrder>
    </StyledOverall>
  );
}

export function All() {
    return (
    <StyledAllOrder>
      <StyledOrder>
        <p>Buy Orders</p>
        <StyledTable>
            <thead>
                <StyledRow>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                    <th></th>
                </StyledRow>
            </thead>
            
            <tbody>
                {allBuy.map((data) => (
                <BuyCard key={data.id} data={data} />
                ))}
            </tbody>
        </StyledTable>
      </StyledOrder>
      <StyledOrder>
        <p>Sell Orders</p>
        <StyledTable>
            <thead>
                <StyledRow>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                    <th></th>
                </StyledRow>
            </thead>
                
            <tbody>
                {allSell.map((data) => (
                <SellCard key={data.id} data={data} />
                ))}
            </tbody>
          </StyledTable>
        </StyledOrder>
    </StyledAllOrder>
  );
}
