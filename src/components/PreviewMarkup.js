import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const ReactMarkdown = require("react-markdown");

function PreviewMarkup(props) {
  const { input } = useSelector(globalState => ({
    ...globalState.markdownReducer
  }));

  return (
    <Fragment>
      <div>
        <Markup source={input} />
      </div>
    </Fragment>
  );
}

export default PreviewMarkup;

const Markup = styled(ReactMarkdown)`
  text-align: left;
  padding: 20px;
`;
