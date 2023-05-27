import { Category as categoryType } from "types/Category.type.ts";
import style from "./category.module.scss";

const Category = ({ id, label}: categoryType) => {
  return (
    <div className={style.category}>
      <button type="button" id={`${id}`} value={label} className={style.button_category}>
        {label}
      </button>
    </div>
   )

};

export default Category;

