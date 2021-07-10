import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import { Route } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Header} />
      <Route path="/write" exact component={Write}/>
      <Route path="/detail" exact component={Detail}/>
      <Route path="/detail/:index" exact component={Detail}/>
    </React.Fragment>
  );
}

export default App;
