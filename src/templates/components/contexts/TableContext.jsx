import { useState, createContext } from "react";
import PropTypes from "prop-types";

const TableContext = createContext();
const TableProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [newproduct, setNewproduct] = useState("");
  const [products, setProducts] = useState(null);

  return (
    <TableContext.Provider
      value={{
        search,
        setSearch,
        newproduct,
        setNewproduct,
        products,
        setProducts,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { TableProvider, TableContext };
