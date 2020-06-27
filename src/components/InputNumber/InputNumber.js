import React, { useState } from "react";
import css from "./inputNumber.module.css";

const InputNumber = props => {
  const { title, name } = props;

  // state
  const [value, setValue] = useState("");

  // handlers
  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setValue(value);
  };

  return (
    <label className={css.container}>
      <h3 className={css.title}>{title}</h3>
      <input
        className={css.input}
        type="number"
        onChange={handleChangeInput}
        name={name}
        value={value}
      ></input>
    </label>
  );
};

export default InputNumber;
