import { useEffect, useState } from "react";
import { Category as CategoryType } from "types/Category.type.ts";
import Category from "./Category";
import Item from "./Item";
import style from "./menu.module.scss";
import Search from "./Search";
import mockItems from "./mockItens.json";
import Order from "./Order";

function Menu() {
  const [categories, setCategories] = useState<Array<CategoryType>>([]);

  useEffect(() => {
    const categorysAddInState: Array<Number> = [];
    const categorys: Array<CategoryType> = [];

    for (let item of mockItems) {
      if (
        item.category.id &&
        categorysAddInState.indexOf(item.category.id) === -1
      ) {
        categorysAddInState.push(item.category.id);
        categorys.push(item.category);
      }

      setCategories(categorys);
    }
  }, []);

  const renderCategories = () => {
    return categories.map((cat) => (
      <Category id={cat.id} label={cat.label} key={cat.id} />
    ));
  };

  const items = () => {
    return mockItems.map((item) => (
      <Item
        id={item.id}
        photo={item.photo}
        description={item.description}
        category={item.category}
        price={item.price}
        serving={item.serving}
        size={item.size}
        title={item.title}
        key={item.id}
      />
    ));
  };

  return (
    <main className={style.container}>
      <div className={style.container_parents}>
        <div>
          <h1 className={style.title}>Menu</h1>
        </div>
        <div>
          <Search />
        </div>
      </div>
      <div className={style.taskbar}>
        <div className={style.categories}>{renderCategories()}</div>
        <div className={style.order}>
          <Order />
        </div>
      </div>
      <div className={style.container_child}>{items()}</div>
    </main>
  );
}

export default Menu;
