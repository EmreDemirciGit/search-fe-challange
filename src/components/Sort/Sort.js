import { useState } from "react";
import "./sort.scss";
import { BiSort } from "react-icons/bi";

const Sort = ({ sortEmployees }) => {
  const [sortOpen, setSortOpen] = useState(false);

  const handleOptionClick = (e, field, direction) => {
    sortEmployees(field, direction);
    e.target.parentElement
      .querySelectorAll(".sort__options__option")
      .forEach((elem) => {
        if (elem.classList.contains("active")) {
          elem.classList.remove("active");
        }
      });
    e.target.classList.add("active");
  };

  return (
    <div className="sort">
      <span
        className="sort__title"
        onClick={() => {
          setSortOpen(!sortOpen);
        }}
      >
        <BiSort />
        Order By
      </span>

      <div className={`sort__options ${sortOpen ? "" : "hidden"}`}>
        <div
          className="sort__options__option"
          onClick={(e) => handleOptionClick(e, "name_surname", "asc")}
        >
          Name ascending
        </div>
        <div
          className="sort__options__option"
          onClick={(e) => handleOptionClick(e, "name_surname", "desc")}
        >
          Name descengin
        </div>
        <div
          className="sort__options__option"
          onClick={(e) => handleOptionClick(e, "date", "asc")}
        >
          Year ascending
        </div>
        <div
          className="sort__options__option"
          onClick={(e) => handleOptionClick(e, "date", "desc")}
        >
          Year descending
        </div>
      </div>
    </div>
  );
};

export default Sort;
