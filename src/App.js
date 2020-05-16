import React from "react";
import "./styles.css";
import styled from "styled-components";
import store from "./store/store";
import { Provider } from "react-redux";
import MyApp from "./MyApp";

const rootStore = store();

export default function App() {
  return (
    <div className="App">
      <H1>Markdown Editor</H1>
      <Provider store={rootStore}>
        <MyApp />
      </Provider>
    </div>
  );
}

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
