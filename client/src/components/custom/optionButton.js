import React from "react";
import styled from "styled-components";
import { FancyButton } from "../order/styles";

export default function OptionButtons ({options = [], selected = [], onSelect = () => null, }) {
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
};

// const Row = styled.div`
//   display: flex;
// `;