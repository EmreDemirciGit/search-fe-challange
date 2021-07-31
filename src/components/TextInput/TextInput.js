const TextInput = ({ placeholder, handleChange, value }) => {
  return (
    <input
      type="text"
      className="styled-text-input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        handleChange(e);
      }}
    />
  );
};

export default TextInput;
