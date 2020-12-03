import React from 'react';
import { StyledRow } from './styles';

export function BuyCard({data}) {
    return (
        <StyledRow>
            <td>{data.security}</td>
            <td>{data.qty}</td>
            <td>{data.bidPrice}</td>
            <td>No stock</td>
        </StyledRow>
    )
}

export function SellCard({data}) {
    return (
        <StyledRow>
            <td>{data.security}</td>
            <td>{data.qty}</td>
            <td>{data.offerPrice}</td>
            <td>data</td>
        </StyledRow>
    )
}