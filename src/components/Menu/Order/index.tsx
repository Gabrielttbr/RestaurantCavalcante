import React from "react";
import options from "./options.json";
import style from './order.module.scss';

const Order = () => {
  return (
    <select name="order" id="order" className={style.order}>
        <option value="">Order by</option>
      {options.map((options, index) => {
        return (
          <option value={options.value} key={index}>
            {options.nome}
          </option>
        );
      })}
    </select>
  );
};
export default Order;
