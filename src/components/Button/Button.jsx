import "./Button.css";

const Button = ({ name, styleType = "primary", clickHandler }) => {
  const getButtonStyling = (styleType) => {
    switch (styleType) {
      case "primary":
        return "primary-btn";
      case "secondary":
        return "secondary-btn";
      default:
        return "primary-btn";
    }
  };


  return (
    <button
      className={`${getButtonStyling(styleType)} `}
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};

export default Button;
