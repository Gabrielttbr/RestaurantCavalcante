import React from 'react';
import classNames from 'classnames';
import { Item as ItemType } from 'types/Item.type.ts';
import style from './item.module.scss';


const Item = ({ id, photo, description, category, price, serving, size, title}:ItemType) => {

    const priceFormatDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    
    const categoryClass = classNames({
        [style.category_mass]: category.label === "Mass",
        [style.category_meat]: category.label === "Meat",
        [style.category_combos]: category.label === "Combos",
        [style.category_vegan]: category.label === "Vegans",
    })

    return (
        <div className={style.box}>
           <div className={style.img_item}>
                <img src={photo} alt={title} className={style.img_item}/>
           </div>
           <div className={style.box_child}>
                <div className={style.title}>
                    <h2>{title}</h2>
                </div>
                <div className={style.description}>
                    <p>{description}</p>	
                </div>
                <div className={style.information}>
                    <div className={categoryClass}>{category.label}</div>
                    <div className={style.size}>{size}</div>
                    <div className={style.serving}>
                        {serving === 1 ? `serving ${serving} person` : ` servings ${serving} people`}
                    </div>    
                    <div className={style.price}>{priceFormatDollar.format(price)}</div>
                </div>            
           </div>
        </div>
    )
}
export default Item;