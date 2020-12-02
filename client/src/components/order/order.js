import React, {useState} from 'react';
import { Route, NavLink } from "react-router-dom";
import Card from './card';
import {
  allBuy,
  allSell,
  fetcBuy,
  fetcSell,
  scocBuy,
  scocSell,
  smazBuy,
  smazSell,
  sprlBuy,
  sprlSell,
  ssbsBuy,
  ssgmSell,
  ssgmBuy,
} from "../../data/data";

export default function Order() {
    // const [length, setLength] = useState(3);
    // console.log(allSell)

    // function handleChange(e) {
    //     setLength({value: e.target.value});  
    // }
    
    return (
        <div>
            <div>
                <div>
                    <p>Market:</p>
                    <div>
                        <NavLink to="/">Spot</NavLink>
                    </div>
                </div>
                <div>
                    <p>Boards:</p>
                    <div>
                        <NavLink to="/">all</NavLink>
                        <NavLink to="/fetc">fetc</NavLink>
                        <NavLink to="/ssbs">ssbs</NavLink>
                        <NavLink to="/ssgm">ssgm</NavLink>
                        <NavLink to="/smaz">smaz</NavLink>
                        <NavLink to="/cexp">cexp</NavLink>
                        <NavLink to="/sprl">sprl</NavLink>
                        <NavLink to="/scoc">scoc</NavLink>
                    </div>
                </div>

                <div> 
                    <Route exact path="/" component={All} />
                    <Route path="/fetc" component={Fetc} />
                    <Route path="/ssbs" component={Ssbs} />
                    <Route path="/ssgm" component={Ssgm} />
                    <Route path="/smaz" component={Smaz} />
                    <Route path="/cexp" component={Cexp} />
                    <Route path="/sprl" component={Sprl} />
                    <Route path="/scoc" component={Scoc} />
                </div> 
            </div>
            
            <div>
                <select>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="20">30</option>
                    <option value="20">50</option>
                    <option value="20">100</option>
                </select>
            </div>
        </div>
    )
}

export function All(){
    return (
        <div>
            <div>
                {
                    allBuy.map(data => <Card key={data.id} data={data} />)
                }
            </div>
            <div>
                {
                    allSell.map(data => <Card key={data.id} data={data} />)
                }
            </div>
        </div>
    )
}

export function Fetc(){
    return (
        <div>
            <div>
                {
                    fetcBuy.map(data => <Card key={data.id} data={data} />)
                }
            </div>
            <div>
                {
                    fetcSell.map(data => <Card key={data.id} data={data} />)
                }
            </div>
        </div>
    )
}

export function Ssbs(){
    return (
        <div>
            <div>
                {
                    ssbsBuy.map(data => <Card key={data.id} data={data} />)
                }
            </div>
            <div>
                <p>No data</p>
            </div>
        </div>
    )
}

export function Ssgm(){
    return (
        <div>
            <div>
                {
                    ssgmBuy.map(data => <Card key={data.id} data={data} />)
                }
            </div>
            <div>
                {
                    ssgmSell.map(data => <Card key={data.id} data={data} />)
                }
            </div>
        </div>
    )
}
export function Smaz(){
    return (
        <div>
            <div>
                {
                    smazBuy.map(data => <Card key={data.id} data={data} />)
                }
            </div>
            <div>
                {
                    smazSell.map(data => <Card key={data.id} data={data} />)
                }
            </div>
        </div>
    )
}

export function Cexp(){
    return (
        <div>
            <div>
                <p>No data</p>
            </div>
            <div>
                <p>No data</p>
            </div>
        </div>
    )
}

export function Sprl(){
    return (
        <div>
            <div>
                {
                    sprlBuy.map(data => <Card key={data.id} data={data} />)
                }
            </div>
            <div>
                {
                    sprlSell.map(data => <Card key={data.id} data={data} />)
                }
            </div>
        </div>
    )
}

export function Scoc(){
    return (
        <div>
            <div>
                {
                    scocBuy.map(data => <Card key={data.id} data={data} />)
                }
            </div>
            <div>
                {
                    scocSell.map(data => <Card key={data.id} data={data} />)
                }
            </div>
        </div>
    )
}