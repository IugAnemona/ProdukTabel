import React, { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { TableContext } from "../contexts/TableContext";
import { getProducts, createProduct } from "../../Api/products";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ProductForm = () => {
  const [open, setOpen] = useState(false);

  const { setProducts } = useContext(TableContext);

  const validationYup = yup.object().shape({
    nome_produto: yup.string().required("Nome do produto é obrigatorio"),
    quantidade: yup.string().required("Quantidade é obrigatorio"),
    valor: yup.string().required("Preço é obrigat1rio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationYup),
  });

  const onSubmit = (values) => {
    addNew = {
      ...values,
      quantidade: Number(values.quantidade),
      valor: Number(values.valor),
    };
    postNewProduct();
    setOpen(false);
  };

  let addNew = {};

  async function getNewTable() {
    const products = await getProducts();
    setProducts(products);
  }

  const postNewProduct = async () => {
    await createProduct(addNew);
    getNewTable();
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="px-2 py-2 md:px-4 md:py-2 text-white  bg-emerald hover:bg-green-500 rounded-md font-bold text-base md:text-xl  cursor-pointer active:bg-seagreen active:text-davysgray">
          <AiOutlinePlus className="inline pb-1 text-2xl" />
          <div className="hidden md:inline">Produto</div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed " />
        <Dialog.Content className="text-slate-700 font-ubuntu font-light bg-powderblue rounded-md shadow-2xl fixed top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 w-11/12 max-w-md max-h-[85vh] p-6">
          <Dialog.Title className="m-0 font-medium text-lg ">
            Novo Produto
          </Dialog.Title>
          <Dialog.Description className="mt-2 mb-5 text-base">
            Adicione um novo produto.
          </Dialog.Description>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-wrap gap-1 items-center mb-4">
              <label
                className="text-base w-[90px] text-right mr-2"
                htmlFor="nome_produto"
              >
                Nome do produto
              </label>
              <input
                name="nome_produto"
                {...register("nome_produto")}
                className="p-2 border-2 outline-0 border-border max-w-xl w-full flex-1 shadow-sm rounded-md text-base focus:border-focus focus:shadow-sm text-text"
              />
              <p className="text-red-500 w-full text-end">
                {errors.nome_produto?.message}
              </p>
            </fieldset>
            <fieldset className="flex flex-wrap gap-1 items-center mb-4">
              <label
                className="text-base w-[90px] text-right mr-2"
                htmlFor="quantidade"
              >
                Quantidade
              </label>
              <input
                name="quantidade"
                {...register("quantidade")}
                className="p-2 border-2 outline-0 border-border max-w-xl w-full flex-1 shadow-sm rounded-md text-base focus:border-focus focus:shadow-sm text-text"
              />
              <p className="text-red-500 w-full text-end">
                {errors.quantidade?.message}
              </p>
            </fieldset>
            <fieldset className="flex flex-wrap gap-1 items-center mb-4">
              <label
                className="text-base w-[90px] text-right mr-2"
                htmlFor="valor"
              >
                Preço
              </label>
              <input
                name="valor"
                {...register("valor")}
                className="p-2 border-2 outline-0 border-border max-w-xl w-full flex-1 shadow-sm rounded-md text-base focus:border-focus focus:shadow-sm text-text"
              />
              <p className="text-red-500 w-full text-end flex-wrap">
                {errors.valor?.message}
              </p>
            </fieldset>
            <div className="flex mt-6 justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded py-0 px-4 text-base font-medium h-9 bg-aliceblue text-davysgray hover:bg-blue-200"
              >
                Adicionar
              </button>
            </div>
          </form>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          ></div>
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

export default ProductForm;
