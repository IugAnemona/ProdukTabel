import ProductsTable from "../ProductsTable/ProductsTable";

const MainContent = () => {
  return (
    <div className="my-10">
      <div className="flex flex-wrap w-screen justify-center p-5 h-full">
        <h1 className="text-4xl font-bold text-davysgray p-5 my-5">
          Tabela de Produtos
        </h1>
        <ProductsTable />
      </div>
    </div>
  );
};

export default MainContent;
