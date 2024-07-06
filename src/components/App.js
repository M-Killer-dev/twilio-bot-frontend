import React from "react";
import { Provider } from "react-redux";
import storage from "../redux/store";
import "./App.css";
import Dashboard from "./Dashboard";

const { store, persistor } = storage();

const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
