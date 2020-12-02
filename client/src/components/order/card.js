import React from 'react';

export default function Card() {
    return (
        <div>
            <div>
                <p>Buy Orders</p>
                <table>
                    <tr>
                        <th>Security</th>
                        <th>Qty</th>
                        <th>Bid price</th>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>No stock</td>
                    </tr>
                </table>
            </div>

            <div>
                <p>Sell Orders</p>
                <table>
                    <tr>
                        <th>Security</th>
                        <th>Qty</th>
                        <th>Offer price</th>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}