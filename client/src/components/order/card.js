import React from 'react';

export function BuyCard({data}) {
    return (
         <tr>
            <td>{data.security}</td>
            <td>{data.qty}</td>
            <td>{data.bidPrice}</td>
            <td>No stock</td>
        </tr>
    )
}

export function SellCard({data}) {
    return (
        <tr>
            <td>{data.security}</td>
            <td>{data.qty}</td>
            <td>{data.offerPrice}</td>
            <td>data</td>
        </tr>
    )
}