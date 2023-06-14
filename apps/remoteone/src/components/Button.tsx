import React from "react";
import "./Button.css";
import { useStore } from "store";

const Button = () => {
  const { addMovie } = useStore();
  return (
    <button
      className="button-85"
      onClick={() => addMovie({ title: "movie", image: "someImage" })}
    >
      Click Me
    </button>
  );
};

export default Button;
