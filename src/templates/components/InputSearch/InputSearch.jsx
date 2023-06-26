import { useContext } from "react";
import { TableContext } from "../contexts/TableContext";

const InputSearch = () => {
  const { search, setSearch } = useContext(TableContext);
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Produto"
      name="imgURL"
      className="p-2 border-2 outline-0 border-border w-2/3 max-w-xl min-w-[200px] rounded-md text-base focus:border-focus focus:shadow-sm text-text"
    />
  );
};

export default InputSearch;
