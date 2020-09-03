import React from "react";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
import { actions } from "./redux/actions";
import { connect } from "react-redux";

import ImageRepo from "./ImageRepo/ImageRepo";
import LoginPage from "./UserLogin/LoginPage";

const MyApp = (props) => {
  const pageDisplayed = !props.token ? <LoginPage /> : <ImageRepo />;
  console.log(props.token);
  return (
    <div>
      <div className="App">{pageDisplayed}</div>
    </div>
  );
};

const mapState = (state) => {
  return { token: state.token };
};

const App = connect(mapState)(MyApp);

export default App;
