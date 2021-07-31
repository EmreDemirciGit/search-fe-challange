import { useEffect, useState } from "react";

import UserListItem from "../../UserListItem";
import TextInput from "../../TextInput";
import Button from "../../Button";
import Sort from "../../Sort";
import logo from "../../../logo.png";
import "./list.scss";
import ReactPaginate from "react-paginate";

const List = ({ employees, searchString, setSearchString, sortEmployees }) => {
  const [paginated, setPaginated] = useState([]);
  const pageCount = employees.length / 6;
  const showPerPage = 6;
  console.log(employees);
  useEffect(() => {
    setPaginated(employees.slice(0, 6));
  }, [employees]);

  const paginate = ({ selected }) => {
    const start = selected * showPerPage;
    setPaginated(employees.slice(start, start + showPerPage));
  };

  return (
    <div>
      <div className="list__header">
        <a href="/">
          <img className="list__header__logo" src={logo} alt="TESODEV logo" />
        </a>
        <TextInput
          value={searchString}
          handleChange={setSearchString}
          placeholder="Search employees by any field"
        />
        <Button className="list__header__search-button">Search</Button>
      </div>
      {employees.length > 1 && (
        <div className="list__employee-container">
          <div className="list__employee-container__sort-container">
            <Sort sortEmployees={sortEmployees} />
          </div>
          <ul className="list__employee-container__list">
            {paginated.map((employee, index) => (
              <UserListItem key={index} {...employee} />
            ))}
          </ul>
          <ReactPaginate
            pageCount={pageCount}
            marginPagesDisplayed={3}
            pageRangeDisplayed={1}
            onPageChange={paginate}
            containerClassName="list__pagination"
            breakClassName="list__pagination__break"
            pageLinkClassName="list__pagination__page"
            previousLinkClassName="list__pagination__page"
            nextLinkClassName="list__pagination__page"
          />
        </div>
      )}
    </div>
  );
};

export default List;
