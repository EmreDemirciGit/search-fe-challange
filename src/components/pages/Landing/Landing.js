import { useHistory } from "react-router-dom";
import logo from "../../../logo.png";
import TextInput from "../../TextInput";
import Button from "../../Button";
import UserListItem from "../../UserListItem";
import "./landing.scss";

const Landing = ({ employees, searchString, setSearchString }) => {
  let history = useHistory();

  function goToList() {
    history.push("/list");
  }
  return (
    <div className="landing-container">
      <div className="header">
        <img className="header__logo" src={logo} alt="TESODEV logo" />
        <span className="header__subtitle">Search web app</span>
      </div>
      <div className="search-container">
        <div className="search-container__search-box">
          <TextInput
            handleChange={setSearchString}
            value={searchString}
            placeholder="Search employees by any field"
          />
          <Button onClick={() => goToList()} className="search-button">
            Search
          </Button>
        </div>
        {employees.length < 1 || (
          <ul className="search-container__search-preview">
            {employees.slice(0, 3).map((employee, index) => (
              <UserListItem key={index} {...employee} />
            ))}
            {employees.length < 3 || (
              <div className="search-container__show-more">
                <span onClick={() => goToList()}>show more</span>
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Landing;
