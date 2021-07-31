import mockData from "../../mockData.json";

export const createData = () => {
  const employees = mockData.data.map((value) =>
    mockData.cols.reduce((o, k, i) => {
      return {
        ...o,
        [k.trim().replace(" ", "_").toLowerCase()]: value[i],
      };
    }, {})
  );

  localStorage.setItem("employees", JSON.stringify(employees));
  return employees;
};

export const getEmployees = () =>
  JSON.parse(localStorage.getItem("employees")) || createData();
