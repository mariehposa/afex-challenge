import React from 'react';
import { Route } from "react-router-dom";

export default function Order() {
    return (
        <div>
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

            <div> 
                <Route exact path="/" component={all} />
                <Route path="/fetc" component={fetc} />
                <Route path="/ssbs" component={ssbs} />
                <Route path="/ssgm" component={ssgm} />
                <Route path="/smaz" component={smaz} />
                <Route path="/cexp" component={cexp} />
                <Route path="/sprl" component={sprl} />
                <Route path="/scoc" component={scoc} />
            </div> 
        </div>
    )
}