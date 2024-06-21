import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);
  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.filter}>
        <p>Search by name</p>
        <input type="text" value={filters} onChange={onChangeFilter} />
      </label>
    </div>
  );
}
