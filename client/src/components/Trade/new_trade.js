import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { StyleAllTrade, StyledTradeSelect, StyledNew, StyledP, SelectTradeCover } from "./styles";
import { fetc, ssbs, ssgm, smaz, cexp, sprl, scoc } from "../../data/buy_order";
import BuyOrderCard from './buy_order';

export default function New() {
    return(       
        <>
            <Route exact path={["/", "/trade"]} component={BaseComponent} />
            <Route path="/trade/fetc" component={Fetc} />
            <Route path="/trade/ssbs" component={Ssbs} />
            <Route path="/trade/ssgm" component={Ssgm} />
            <Route path="/trade/smaz" component={Smaz} />
            <Route path="/trade/cexp" component={Cexp} />
            <Route path="/trade/sprl" component={Sprl} />
            <Route path="/trade/scoc" component={Scoc} />
        </>
    )
}

function BaseComponent() {
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

    const [opt, setOpt] = useState(options)

    const history = useHistory();
    const handleChange = (event) => {
        const val = event.target.value;
        history.push(`/trade/${val}`)
    };
    
    return ( 
        <StyleAllTrade>
            <StyledNew>
                <button onClick={() => setOpt(options)}>Buy</button>
                <button onClick={() => setOpt([{name: 'No Commodities available', value: null}])}>Sell</button>
                <p>for</p>
                <StyledP>Spot</StyledP>
            </StyledNew>
            <SelectTradeCover>
                <StyledTradeSelect onChange={handleChange}>
                    {opt.map(item => (
                        <option key={item.value} value={item.value}>
                        {item.name}
                        </option>
                    ))}
                </StyledTradeSelect>
            </SelectTradeCover>
        </StyleAllTrade>
    )
}

export function Fetc() {
    return (
        <>
            {
                fetc.map(data => (<BuyOrderCard key={data.id} data={data} />))
            }
        </>
    )
}

export function Ssbs() {
    return (
        <>
            {
                ssbs.map(data => (<BuyOrderCard key={data.id} data={data} />))
            }
        </>
    )
}

export function Ssgm() {
    return (
        <>
            {
                ssgm.map(data => (<BuyOrderCard key={data.id} data={data} />))
            }
        </>
    )
}

export function Smaz() {
    return (
        <>
            {
                smaz.map(data => (<BuyOrderCard key={data.id} data={data} />))
            }
        </>
    )
}

export function Cexp() {
    return (
        <>
            {
                cexp.map(data => (<BuyOrderCard key={data.id} data={data} />))
            }
        </>
    )
}

export function Sprl() {
    return (
        <>
            {
                sprl.map(data => (<BuyOrderCard key={data.id} data={data} />))
            }
        </>
    )
}

export function Scoc() {
    return (
        <>
            {
                scoc.map(data => (<BuyOrderCard key={data.id} data={data} />))
            }
        </>
    )
}