import { useHistory } from "react-router-dom";

const Landing = () => {
  let history = useHistory();

  function goToList() {
    history.push("/list");
  }
  return (
    <>
      <button onClick={() => goToList()}>abadibudaba</button>
    </>
  );
};

export default Landing;
