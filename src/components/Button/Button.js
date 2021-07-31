const Button = ({ children, onClick }) => {
  return (
    <div onClick={() => onClick?.()} className="styled-button">
      {children}
    </div>
  );
};

export default Button;
