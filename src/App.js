import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main } from "./Components/Main";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { PageNotFound } from "./Components/PageNotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Main} exact path="/" />
          <Route component={Login} exact path="/login" />
          <Route component={SignUp} exact path="/signUp" />
          <Route component={Login} exact path="/login" />
          <Route component={PageNotFound} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
