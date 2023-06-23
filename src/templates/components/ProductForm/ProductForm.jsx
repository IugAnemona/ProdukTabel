import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

const ProductForm = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="px-3 py-3 md:px-4 sm:py-2 text-slate-700  bg-emerald hover:bg-green-500 rounded-md font-bold text-base md:text-xl  cursor-pointer active:bg-seagreen active:text-slate-200">
        <AiOutlinePlus className="inline pb-1 text-2xl" /> Produto
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed " />
      <Dialog.Content className="text-slate-700 bg-powderblue rounded-md shadow-2xl fixed top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 w-11/12 max-w-md max-h-[85vh] p-6">
        <Dialog.Title className="m-0 font-medium text-lg ">
          Novo Produto
        </Dialog.Title>
        <Dialog.Description className="mt-2 mb-5 text-base">
          Adicione um novo produto
        </Dialog.Description>
        <fieldset className="flex gap-5 items-center mb-4">
          <label className="text-base w-[90px] text-right" htmlFor="name">
            Nome
          </label>
          <input
            className="p-2 border-2 outline-0 border-border max-w-xl w-full flex-1 shadow-sm rounded-md text-base focus:border-focus focus:shadow-sm text-text"
            id="name"
          />
        </fieldset>
        <fieldset className="flex gap-5 items-center mb-4">
          <label className="text-base w-[90px] text-right" htmlFor="username">
            Quantidade
          </label>
          <input
            className="p-2 border-2 outline-0 border-border max-w-xl w-full flex-1 shadow-sm rounded-md text-base focus:border-focus focus:shadow-sm text-text"
            id="username"
            type="Number"
          />
        </fieldset>
        <fieldset className="flex gap-5 items-center mb-4">
          <label className="text-base w-[90px] text-right" htmlFor="username">
            Preço
          </label>
          <input
            className="p-2 border-2 outline-0 border-border max-w-xl w-full flex-1 shadow-sm rounded-md text-base focus:border-focus focus:shadow-sm text-text"
            id="username"
            type="Number"
          />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Dialog.Close asChild>
            <button className="inline-flex items-center justify-center rounded py-0 px-4 text-base font-medium h-9 bg-aliceblue text-davysgray hover:bg-blue-200">
              Adicionar
            </button>
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

export default ProductForm;
