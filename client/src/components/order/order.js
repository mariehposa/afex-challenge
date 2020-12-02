import React, {useState} from 'react';
import { Route } from "react-router-dom";

export default function Order() {
    const [length, setLength] = useState(3);

    function handleChange(e) {
        setLength({value: e.target.value});  
    }
    
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
            
            <div>
                <select onChange={handleChange}>
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