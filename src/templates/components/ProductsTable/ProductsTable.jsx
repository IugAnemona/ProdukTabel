import { BsFillTrashFill } from "react-icons/bs";
import AddProduct from "../AddProduct/AddProduct";
import productsData from "../../Api/ApiData";
import { useEffect, useState } from "react";

const ProductsTable = () => {
  const [products, setProducts] = useState(null);

  async function aaa() {
    const products = await productsData();
    setProducts(products);
    console.log("oi");
  }

  useEffect(() => {
    aaa();
  }, []);

  return (
    <div className="rounded-xl container overflow-auto bg-aliceblue py-10">
      <AddProduct />
      <div className="my-8 shadow-sm bg-aliceblue">
        <div className="table w-full border-collapse table-auto text-base lg:text-lg">
          <div className="table-header-group">
            <div className="table-row text-base lg:text-xl">
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
            products.map((p) => (
              <div key={p.id} className="table-row-group bg-slate-50">
                <div className="table-row">
                  <div className="table-cell border-b border-slate-100 p-4 pl-8 lg:p-14 lg:pl-8 text-davysgray">
                    {p.nome_produto}
                  </div>
                  <div className="table-cell border-b border-slate-100 p-4 pl-8 lg:p-14 lg:pl-8 text-davysgray">
                    {p.quantidade}
                    <a
                      className="mx-2 text-lg font-bold text-green-400"
                      href="#"
                    >
                      +
                    </a>
                    |
                    <a className="mx-2 text-lg font-bold text-red-400" href="#">
                      -
                    </a>
                  </div>
                  <div className="table-cell border-b border-slate-100 p-4 pl-8 lg:p-14 lg:pl-8 text-slate-500">
                    {p.valor}
                  </div>
                  <div className="table-cell border-b border-slate-100 p-4 pl-8 lg:p-14 lg:pl-8 text-slate-500 text-lg">
                    <BsFillTrashFill className="hover:scale-125 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
