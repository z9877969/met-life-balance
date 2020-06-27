import React from "react";
import InputNumber from "../InputNumber/InputNumber";
import css from "./formData.module.css";

const FormValues = props => {
  const { setData } = props;

  // handlers
  const handleSubmit = e => {
    e.preventDefault();
    const dataResult = {};
    [...e.target.elements]
      .filter(el => el["name"])
      .map(el => {
        dataResult[el["name"]] = Number(el["value"]);
      });
    setData(dataResult);
  };

  return (
    <form onSubmit={handleSubmit} methode="POST" className={css.form}>
      <h2> Ввод данных </h2>
      <div className={css.inputsContainer}>
        <InputNumber
          name="years"
          title="Период накопления, лет"
          type="number"
        />
        <InputNumber
          name="deposit"
          title="Годовое поступление, грн"
          type="number"
        />
        <InputNumber
          name="insurance"
          title="Страховая сумма, грн"
          type="number"
        />
        <InputNumber
          name="procent"
          title="Процентная ставка, %"
          type="number"
        />
      </div>

      <button
        style={{ display: "block", margin: "30px auto" }}
        type="submit"
        className={css.btn}
      >
        Рассчитать
      </button>
    </form>
  );
};

export default FormValues;
