import React, { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { TableContext } from "../contexts/TableContext";
import { getProducts, createProduct } from "../../Api/products";
import { BsPencilSquare } from "react-icons/bs";
import PropTypes from "prop-types";

const ProductForm = (props) => {
  const { setProducts } = useContext(TableContext);
  const addNew = {};

  async function getNewTable() {
    const products = await getProducts();
    setProducts(products);
  }

  const postNewProduct = async () => {
    await createProduct(addNew);
    getNewTable();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {props.type === "edit" ? (
          <button className="text-violet11 hover:bg-mauve3 mr-4 shadow-blackA7 inline-flex p-1 items-center justify-center rounded-[4px] bg-white font-medium leading-none shadow-[0_2px_10px] outline-none">
            <BsPencilSquare
              // onClick={() => deleteP(p.id)}
              className="hover:scale-125 cursor-pointer"
            />
          </button>
        ) : (
          <button className="px-2 py-2 md:px-4 md:py-2 text-white  bg-emerald hover:bg-green-500 rounded-md font-bold text-base md:text-xl  cursor-pointer active:bg-seagreen active:text-davysgray">
            <AiOutlinePlus className="inline pb-1 text-2xl" />
            <div className="hidden md:inline">Produto</div>
          </button>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed " />
        <Dialog.Content className="text-slate-700 bg-powderblue rounded-md shadow-2xl fixed top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 w-11/12 max-w-md max-h-[85vh] p-6">
          <Dialog.Title className="m-0 font-medium text-lg ">
            {props.type !== "edit" ? "Novo Produto" : "Editar Produto"}
          </Dialog.Title>
          <Dialog.Description className="mt-2 mb-5 text-base">
            {props.type !== "edit"
              ? "Adicione um novo produto."
              : "Edite o produto escolhido."}
          </Dialog.Description>
          <fieldset className="flex gap-5 items-center mb-4">
            <label className="text-base w-[90px] text-right" htmlFor="name">
              Nome
            </label>
            <input
              onChange={(e) => (addNew.nome_produto = e.target.value)}
              className="p-2 border-2 outline-0 border-border max-w-xl w-full flex-1 shadow-sm rounded-md text-base focus:border-focus focus:shadow-sm text-text"
              id="name"
            />
          </fieldset>
          <fieldset className="flex gap-5 items-center mb-4">
            <label className="text-base w-[90px] text-right" htmlFor="quantity">
              Quantidade
            </label>
            <input
              onChange={(e) => (addNew.quantidade = Number(e.target.value))}
              className="p-2 border-2 outline-0 border-border max-w-xl w-full flex-1 shadow-sm rounded-md text-base focus:border-focus focus:shadow-sm text-text"
              id="quantity"
              type="Number"
            />
          </fieldset>
          <fieldset className="flex gap-5 items-center mb-4">
            <label className="text-base w-[90px] text-right" htmlFor="price">
              Preço
            </label>
            <input
              onChange={(e) => (addNew.valor = Number(e.target.value))}
              className="p-2 border-2 outline-0 border-border max-w-xl w-full flex-1 shadow-sm rounded-md text-base focus:border-focus focus:shadow-sm text-text"
              id="price"
              type="Number"
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              {props.type !== "edit" ? (
                <button
                  onClick={postNewProduct}
                  className="inline-flex items-center justify-center rounded py-0 px-4 text-base font-medium h-9 bg-aliceblue text-davysgray hover:bg-blue-200"
                >
                  Adicionar
                </button>
              ) : (
                <button
                  onClick={() => props.update(addNew, props.id)}
                  className="inline-flex items-center justify-center rounded py-0 px-4 text-base font-medium h-9 bg-aliceblue text-davysgray hover:bg-blue-200"
                >
                  Salvar
                </button>
              )}
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="rounded-full h-6 w-6 inline-flex items-center justify-center absolute top-3 right-3 hover:bg-aliceblue "
              aria-label="Close"
            >
              <GrFormClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

ProductForm.propTypes = {
  type: PropTypes.string,
  update: PropTypes.func,
  id: PropTypes.number,
};

export default ProductForm;
