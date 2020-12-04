import React from 'react';

export default function BuyOrder() {
    return (
        <div>
            <div>
                <p>Buy Order for FETC</p>
                <button>Start Again</button>
            </div>
            
            <div>
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
                    <select disabled>
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
                    <div>
                        <p>[Min Price: <span>9,750</span></p>
                        <p>Max Price: <span>10,250]</span></p>
                    </div>
                    <p>Estimated Value: #10,000.00</p>
                </div>
            </div>

            <div>
                <button>Cancel</button>
                <button>Confirm</button>
            </div>
        </div>
    )
} 