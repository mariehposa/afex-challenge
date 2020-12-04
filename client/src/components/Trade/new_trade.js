import React from "react";
import { Route, useHistory } from "react-router-dom";
import { StyleAllTrade, StyledTradeSelect, StyledNew, StyledP, SelectTradeCover } from "./styles";
import { fetc, ssbs, ssgm, smaz, cexp, sprl, scoc } from "../../data/buy_order";
import BuyCard from './buy_order';

export default function New() {
    const options = [
        { name: 'Select Commodity', value: null },
        { name: 'Fair Trade ETC FETC', value: 'fetc' },
        { name: 'Soybean SSBS', value: 'ssbs' },
        { name: 'Sorghum SSGM', value: 'ssgm' },
        { name: 'Maize SMAZ', value: 'smaz' },
        { name: 'Export Note CEXP', value: 'cexp' },
        { name: 'Paddy Rice SPRL', value: 'sprl' },
        { name: 'Cocoa SCOC', value: 'scoc' }
    ]

    const history = useHistory();
    const handleChange = (event) => {
        const val = event.target.value;
        history.push(`/trade/${val}`)
    };

    return(
        <>
            <StyleAllTrade>
                <StyledNew>
                    <button>Buy</button>
                    <button>Sell</button>
                    <p>for</p>
                    <StyledP>Spot</StyledP>
                </StyledNew>
                <SelectTradeCover>
                    <StyledTradeSelect onChange={handleChange}>
                        {options.map(item => (
                            <option key={item.value} value={item.value}>
                            {item.name}
                            </option>
                        ))}
                    </StyledTradeSelect>
                </SelectTradeCover>
            </StyleAllTrade>
            
            <>
                <Route path="/fetc" component={Fetc} />
                <Route path="/ssbs" component={Ssbs} />
                <Route path="/ssgm" component={Ssgm} />
                <Route path="/smaz" component={Smaz} />
                <Route path="/cexp" component={Cexp} />
                <Route path="/sprl" component={Sprl} />
                <Route path="/scoc" component={Scoc} />
            </>
        </>
    )
}

export function Fetc() {
    return (
        <>

        </>
    )
}