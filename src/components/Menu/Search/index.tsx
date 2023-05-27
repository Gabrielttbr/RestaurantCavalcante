import style from "./search.module.scss";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <div className={style.box}>
      <input type="text" placeholder="Search" className={style.inputSearch} />
      <div className={style.searchIcon}>
        <CgSearch />
      </div>
    </div>
  );
};

export default Search;
