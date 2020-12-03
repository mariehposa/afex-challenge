import React from 'react';
import { StyledRow, Disable } from './styles';

export function BuyCard({data}) {
    return (
        <StyledRow>
            <td>{data.security}</td>
            <td>{data.qty}</td>
            <td>#{data.bidPrice}</td>
            <Disable>No stock</Disable>
        </StyledRow>
    )
}

export function SellCard({data}) {
    return (
        <StyledRow>
            <td>{data.security}</td>
            <td>{data.qty}</td>
            <td>#{data.offerPrice}</td>
            <td>data</td>
        </StyledRow>
    )
}