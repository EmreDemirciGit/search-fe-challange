import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./components/pages/Landing";
import List from "./components/pages/List";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
