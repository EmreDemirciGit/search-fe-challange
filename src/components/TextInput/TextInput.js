import "./textInput.scss";

const TextInput = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="styled-text-input"
      placeholder={placeholder}
    />
  );
};

export default TextInput;
