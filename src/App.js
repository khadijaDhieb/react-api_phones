import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { PhonesList } from "./components/PhonesList";
import { EditPhone } from "./components/EditPhone";
import { DeletePhone } from "./components/DeletePhone";
import { AddPhone } from "./components/AddPhone";
import { GlobalProvider } from './context/GlobalContext';

import "./App.css";


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route
            exact
            path="/phones"
            component={PhonesList}
          />
          <Route
            path="/phones/add"
            component={AddPhone}
          />
          <Route
            path="/phones/edit/:id"
           component={EditPhone} 
          />
          <Route
            path="/phones/delete/:id"
            component={DeletePhone}
          />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}
export default App;
