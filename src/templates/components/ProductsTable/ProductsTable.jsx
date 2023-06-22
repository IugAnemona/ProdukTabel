import { BsFillTrashFill } from "react-icons/bs";
import AddProduct from "../AddProduct/AddProduct";

const ProductsTable = () => {
  const products = [
    {
      id: 1,
      name: "Notebook i7 8GB Branco",
      quantity: 3,
      price: 2999.0,
    },
    { id: 2, name: "Notebook i7 8GB Preto", quantity: 5, price: 2999.0 },
  ];

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
          {products.map((p) => (
            <div key={p.id} className="table-row-group bg-slate-50">
              <div className="table-row">
                <div className="table-cell border-b border-slate-100 p-4 pl-8 lg:p-14 lg:pl-8 text-davysgray">
                  {p.name}
                </div>
                <div className="table-cell border-b border-slate-100 p-4 pl-8 lg:p-14 lg:pl-8 text-davysgray">
                  {p.quantity}{" "}
                  <a className="mx-2 text-lg font-bold text-green-400" href="#">
                    +
                  </a>
                  |
                  <a className="mx-2 text-lg font-bold text-red-400" href="#">
                    -
                  </a>
                </div>
                <div className="table-cell border-b border-slate-100 p-4 pl-8 lg:p-14 lg:pl-8 text-slate-500">
                  {p.price}
                </div>
                <div className="table-cell border-b border-slate-100 p-4 pl-8 lg:p-14 lg:pl-8 text-slate-500 text-lg">
                  <BsFillTrashFill className="hover:scale-125 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
