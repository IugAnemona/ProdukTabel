import ProductsTable from "../ProductsTable/ProductsTable";
import { TableProvider } from "../contexts/TableContext";

const MainContent = () => {
  return (
    <div className="my-10">
      <div className="flex flex-wrap w-screen justify-center p-2 md:p-5 h-full">
        <h1 className="text-4xl w-full text-center font-bold text-davysgray p-5 my-5">
          Tabela de Produtos
        </h1>
        <TableProvider>
          <ProductsTable />
        </TableProvider>
      </div>
    </div>
  );
};

export default MainContent;
