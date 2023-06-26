import AddProduct from "../AddProduct/AddProduct";
import { useContext, useEffect } from "react";
import { TableContext } from "../contexts/TableContext";
import { deleteProduct, getProducts, updateProduct } from "../../Api/products/";
import { CgSpinner } from "react-icons/cg";

import Alert from "../AlertDialog/Alert";
import ProductForm from "../ProductForm/ProductForm";

const ProductsTable = () => {
  const { search, products, setProducts } = useContext(TableContext);

  async function getTable() {
    const products = await getProducts();
    setProducts(products);
  }

  async function deleteP(id) {
    await deleteProduct(id);
    const products = await getProducts();
    setProducts(products);
  }

  async function updateP(data, id) {
    await updateProduct(data, id);
    const products = await getProducts();
    setProducts(products);
  }

  useEffect(() => {
    getTable();
  }, []);

  return (
    <div className="rounded-xl container overflow-auto bg-aliceblue py-10">
      <AddProduct />
      <div className="my-8 shadow-sm bg-aliceblue">
        <div className="table w-full border-collapse table-auto text-base lg:text-lg">
          <div className="table-header-group">
            <div className="table-row text-base lg:text-lg">
              <div className="table-cell text-left font-medium p-2 pl-8 pt-0 pb-3 text-powderblue">
                Produto
              </div>
              <div className="table-cell text-left font-medium p-2 pl-8 pt-0 pb-3 text-powderblue">
                Quantidade
              </div>
              <div className="table-cell text-left font-medium p-2 pl-8 pt-0 pb-3 text-powderblue">
                Valor (R$)
              </div>
              <div className="table-cell text-left font-medium p-2 pl-8 pt-0 pb-3 text-powderblue"></div>
            </div>
          </div>

          {products ? (
            products
              .filter((p) =>
                p.nome_produto.toLowerCase().includes(search.toLowerCase())
              )
              .map((p) => (
                <div key={p.id} className="table-row-group bg-slate-50">
                  <div className="table-row">
                    <div className="table-cell border-b border-slate-100 p-4 pl-8  text-davysgray">
                      {p.nome_produto}
                    </div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8  text-davysgray">
                      {p.quantidade}
                      <a
                        className="mx-2 text-lg font-bold text-green-400"
                        href="#"
                      >
                        +
                      </a>
                      |
                      <a
                        className="mx-2 text-lg font-bold text-red-400"
                        href="#"
                      >
                        -
                      </a>
                    </div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8  text-slate-500">
                      {p.valor}
                    </div>
                    <div className="table-cell border-b border-slate-100 p-4 pl-8  text-slate-500 text-lg">
                      <ProductForm type={"edit"} update={updateP} id={p.id} />
                      <Alert delete={deleteP} id={p.id} />
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="w-full flex justify-end text-5xl p-5">
              <CgSpinner className="animate-spin" />
            </div>
          )}
          {products &&
            products.length > 0 &&
            products.filter((p) =>
              p.nome_produto.toLowerCase().includes(search.toLowerCase())
            ).length === 0 && (
              <div className="p-6 text-xl text-davysgray">
                <h2 className="">
                  Nenhum produto encontrado com o nome `{search}`
                </h2>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
