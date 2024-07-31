import { useState } from "react";
const Box = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return <div className="box" onClick={handleClick}>{clicked ? "X" : null}</div>;
};

export default Box;
