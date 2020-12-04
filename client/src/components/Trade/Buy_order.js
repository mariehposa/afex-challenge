import React from 'react';
import { StyledBuyOrder, FirstDiv, SecondDiv, ThirdDiv, Coverall, StyledPrice } from "./styles";
import refresh from "../../images/refresh.svg";

export default function BuyOrder({data}) {
    return (
        <StyledBuyOrder>
            <Coverall>
            <FirstDiv>
    <p>Buy <span>Order for</span>{data.name}</p>
                <button>
                    <img src={refresh} alt="refresh"/>
                    Start Again
                </button>
            </FirstDiv>

            <SecondDiv>
                <div>
                    <p>Location</p>
                    <select disabled>
                    </select>
                </div>
                <div>
                    <p>Cash Balance (₦)</p>
                    <input type="number" id="points" step="1" />
                </div>
                <div>
                    <p>Community</p>
                    <select>
                        <option value="na">N/A</option>
                    </select>
                </div>
                <div>
                    <p>Quantity Owned (Units)</p>
                    <input type="number" id="points" step="1" />
                </div>
                <div>
                    <p>Order Quantity (Units)</p>
                    <input type="number" id="points" step="1" />
                </div>
                <div>
                    <p>Current Price (₦)</p>
                    <input type="number" id="points" step="1" />
                </div>
                <div>
                    <p>Buy Price/Unit (₦)</p>
                    <input type="text" defaultValue={data.buy_price}/>
                    <StyledPrice>
    <p> <span>[</span>Min Price: <span>{data.min_price}</span></p>
                        <p>Max Price: <span>{data.max_price}]</span></p>
                    </StyledPrice>
    <p>Estimated Value: <span>#{data.estimated_price}</span></p>
                </div>
            </SecondDiv>

            <ThirdDiv>
                <button>Cancel</button>
                <button>Confirm</button>
            </ThirdDiv>
            </Coverall>
        </StyledBuyOrder>
    )
} 