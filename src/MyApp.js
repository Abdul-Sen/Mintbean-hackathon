import React, { useRef } from "react";
import styled from "styled-components";
import ReactToPrint from "react-to-print";

// components
import MarkInput from "./components/MarkInput";
import PreviewMarkup from "./components/PreviewMarkup";
import Print from "./components/print";

export default function MyApp() {
  // create our ref
  const myInput = useRef();

  return (
    <div>
      <Print />
      <Container>
        <div style={{ width: "45%" }}>
          <MarkInput />
        </div>
        <div style={{ width: "45%" }}>
          <PreviewMarkup />
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flexbox;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: stretch;
  align-content: stretch;
  min-height: 400px;
`;
