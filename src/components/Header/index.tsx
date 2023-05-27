import React from 'react';
import style from "./header.module.scss";

const Header = () => {
    return (
        <header>
            <nav className={style.NavbarContainer}>
                <h1 className={style.tittle}>RESTAURANT CAVALCANTE</h1>
            </nav>
            <div className={style.jumbotron}>
                <h2 className={style.sub_title}>The house of code and mass</h2>
            </div>
        </header>
    );
}
export default Header;
