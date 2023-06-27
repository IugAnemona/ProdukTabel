import { useContext } from "react";
import InputSearch from "../InputSearch/InputSearch";
import ProductForm from "../ProductForm/ProductForm";
import { TableContext } from "../contexts/TableContext";
import { createProduct, getProducts } from "../../Api/products";

const AddProduct = () => {
  const { setProducts } = useContext(TableContext);

  const postNewProduct = async (addNew) => {
    await createProduct(addNew);
    getNewTable();
  };

  async function getNewTable() {
    const products = await getProducts();
    setProducts(products);
  }

  return (
    <section className="flex  md:w-auto justify-between items-center mx-4">
      <div className="flex-1">
        <InputSearch />
      </div>
      <div className="">
        <ProductForm func={postNewProduct} />
      </div>
    </section>
  );
};

export default AddProduct;
