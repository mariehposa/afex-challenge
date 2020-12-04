import React from 'react';
import { StyledBuyOrder, FirstDiv, SecondDiv, ThirdDiv, Coverall, StyledPrice } from "./styles";
import refresh from "../../images/refresh.svg";

export default function BuyOrder() {
    return (
        <StyledBuyOrder>
            <Coverall>
            <FirstDiv>
                <p>Buy <span>Order for</span> FETC</p>
                <button>
                    <img src={refresh}/>
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
                    <input type="text" />
                    <StyledPrice>
                        <p> <span>[</span>Min Price: <span>9,750</span></p>
                        <p>Max Price: <span>10,250]</span></p>
                    </StyledPrice>
                    <p>Estimated Value: <span>#10,000.00</span></p>
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