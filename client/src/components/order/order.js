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
  StyledAllOrder
} from "./styles";

export default function Order() {
  // const [length, setLength] = useState(3);
  // console.log(allSell)

  // function handleChange(e) {
  //     setLength({value: e.target.value});
  // }

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
              <StyledNav to="/">all</StyledNav>
              <StyledNav to="/fetc">fetc</StyledNav>
              <StyledNav to="/ssbs">ssbs</StyledNav>
              <StyledNav to="/ssgm">ssgm</StyledNav>
              <StyledNav to="/smaz">smaz</StyledNav>
              <StyledNav to="/cexp">cexp</StyledNav>
              <StyledNav to="/sprl">sprl</StyledNav>
              <StyledNav to="/scoc">scoc</StyledNav>
            </div>
          </InnerDiv>
        </StyledDiv>

        <SelectCover>
          <StyledSelect>
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

      <>
        <Route exact path="/" component={All} />
        <Route path="/fetc" component={Fetc} />
        <Route path="/ssbs" component={Ssbs} />
        <Route path="/ssgm" component={Ssgm} />
        <Route path="/smaz" component={Smaz} />
        <Route path="/cexp" component={Cexp} />
        <Route path="/sprl" component={Sprl} />
        <Route path="/scoc" component={Scoc} />
      </>
    </StyledOverall>
  );
}

export function All() {
  return (
    <StyledAllOrder>
      <StyledOrder>
        <p>Buy Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                </tr>
            </thead>

            <tbody>
                {allBuy.map((data) => (
                <BuyCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
      <StyledOrder>
        <p>Sell Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                </tr>
            </thead>

            <tbody>
                {allSell.map((data) => (
                <SellCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
    </StyledAllOrder>
  );
}

export function Fetc() {
  return (
    <StyledAllOrder>
      <StyledAll>
        <p>Buy Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                </tr>
            </thead>

            <tbody>
                {fetcBuy.map((data) => (
                <BuyCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledAll>
      <StyledAll>
        <p>Sell Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                </tr>
            </thead>
            
            <tbody>
                {fetcSell.map((data) => (
                <SellCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledAll>
    </StyledAllOrder>
  );
}

export function Ssbs() {
  return (
    <StyledAllOrder>
      <StyledOrder>
        <p>Buy Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                </tr>
            </thead>
            
            <tbody>
                {ssbsBuy.map((data) => (
                <BuyCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
      <StyledOrder>
        <p>Sell Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                </tr>
            </thead>
            
            <tbody>
                <p>No data</p>
            </tbody>
        </table>
      </StyledOrder>
    </StyledAllOrder>
  );
}

export function Ssgm() {
  return (
    <StyledAllOrder>
      <StyledOrder>
        <p>Buy Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                </tr>
            </thead>
            
            <tbody>
                {ssgmBuy.map((data) => (
                <BuyCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
      <StyledOrder>
        <p>Sell Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                </tr>
            </thead>
            
            <tbody>
                {ssgmSell.map((data) => (
                <SellCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
    </StyledAllOrder>
  );
}
export function Smaz() {
  return (
    <StyledAllOrder>
      <StyledOrder>
        <p>Buy Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                </tr>
            </thead>
            
            <tbody>
                {smazBuy.map((data) => (
                <BuyCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
      <StyledOrder>
        <p>Sell Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                </tr>
            </thead>
            
            <tbody>
                {smazSell.map((data) => (
                <SellCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
    </StyledAllOrder>
  );
}

export function Cexp() {
  return (
    <StyledAllOrder>
      <StyledOrder>
        <p>Buy Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                </tr>
            </thead>
            
            <tbody>
                <p>No data</p>
            </tbody>
        </table>
      </StyledOrder>
      <StyledOrder>
        <p>Sell Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                </tr>
            </thead>
            
            <tbody>
                <p>No data</p>
            </tbody>
        </table>
      </StyledOrder>
    </StyledAllOrder>
  );
}

export function Sprl() {
  return (
    <StyledAllOrder>
      <StyledOrder>
        <p>Buy Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                </tr>
            </thead>
            
            <tbody>
                {sprlBuy.map((data) => (
                <BuyCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
      <StyledOrder>
        <p>Sell Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                </tr>
            </thead>
            
            <tbody>
                {sprlSell.map((data) => (
                <SellCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
    </StyledAllOrder>
  );
}

export function Scoc() {
  return (
    <StyledAllOrder>
      <StyledOrder>
        <p>Buy Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Bid price</th>
                </tr>
            </thead>
            
            <tbody>
                {scocBuy.map((data) => (
                <BuyCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
      <StyledOrder>
        <p>Sell Orders</p>
        <table>
            <thead>
                <tr>
                    <th>Security</th>
                    <th>Qty</th>
                    <th>Offer price</th>
                </tr>
            </thead>
            
            <tbody>
                {scocSell.map((data) => (
                <SellCard key={data.id} data={data} />
                ))}
            </tbody>
        </table>
      </StyledOrder>
    </StyledAllOrder>
  );
}
