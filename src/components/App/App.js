import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getEmployees } from "./AppLogic";

import Landing from "../pages/Landing/Landing";
import List from "../pages/List/List";
import _ from "lodash";

const employees = getEmployees();
function App() {
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchString, setSearchString] = useState("");

  const handleSearchStringChance = (e) => {
    setSearchString(e.target.value);
  };

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (searchString === "") return setFilteredEmployees([]);
      setFilteredEmployees(
        employees.filter((employee) => {
          return Object.values(employee).some((val) =>
            val.toLowerCase().includes(searchString.toLowerCase())
          );
        })
      );
    }
  }, [searchString]);

  const sortEmployees = (field, direction) => {
    const ordered = _.orderBy(filteredEmployees, [field], [direction]);
    setFilteredEmployees(ordered);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landing
              employees={filteredEmployees}
              searchString={searchString}
              setSearchString={handleSearchStringChance}
            />
          </Route>
          <Route exact path="/list">
            <List
              employees={filteredEmployees}
              searchString={searchString}
              setSearchString={handleSearchStringChance}
              sortEmployees={sortEmployees}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
