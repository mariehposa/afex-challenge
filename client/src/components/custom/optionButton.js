import React from "react";
import { FancyButton } from "../order/styles";

export default function OptionButtons ({options = [], selected = [], onSelect = () => null, }) {
    return (
        <>
            {options.map((o) => (
            <FancyButton
                onClick={() => onSelect(o)}
                active={selected.includes(o) || (o == "all" && selected.length == 0)}
                key={o}
            >
                {o}
            </FancyButton>
            ))}
        </>
    )
};