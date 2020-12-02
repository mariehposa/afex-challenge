import React from 'react';

export default function Card({data}) {
    return (
        <div>
            <div>
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
                        <tr>
                            <td>{data.security}</td>
                            <td>{data.qty}</td>
                            <td>{data.bidPrice}</td>
                            <td>No stock</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
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
                        <tr>
                            <td>{data.security}</td>
                            <td>{data.qty}</td>
                            <td>{data.offerPrice}</td>
                            <td>data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}