import React, { Fragment } from "react";
import styled from "styled-components";
import ReactToPrint from "react-to-print";

function Print() {
  const handle = () => {
    window.print();
  };
  return (
    <Fragment>
      <PrintBtn onClick={handle}>Print</PrintBtn>
    </Fragment>
  );
}

export default Print;

let PrintBtn = styled.button`
  padding: 15px;
  margin: 15px;
  margin-left: auto;
  border-radius: 15px;

  background-image: linear-gradient(45deg, #e9e4f0, #d3cce3);
  display: block;
`;
