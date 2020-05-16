import React, { Fragment, useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import styled from "styled-components";
import { useDispatch } from "react-redux";

function MarkInput(props) {
  let [temp, setTemp] = useState(
    "# Write here \n\n * Made with 💓 using [React Markdown](https://github.com/rexxars/react-markdown) and [prismjs](https://prismjs.com/)"
  );
  const dispatch = useDispatch();
  const updateGlobalState = () => {
    dispatch({
      type: "UPDATE_INPUT",
      payload: temp
    });
  };
  useEffect(() => {
    updateGlobalState();
  }, [temp]);
  return (
    <Fragment>
      <MarkInputTextField
        value={temp}
        rows="22"
        cols="1000"
        onValueChange={code => setTemp(code)}
        highlight={code => highlight(code, languages.js)}
      />
    </Fragment>
  );
}

const MarkInputTextField = styled(Editor)`
  font-family: monospace;
  min-height: 50%;
  border-width: 3px;
  border-color: black;
  border-style: solid;
`;

export default MarkInput;
