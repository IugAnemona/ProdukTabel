import InputSearch from "../InputSearch/InputSearch";
import ProductForm from "../ProductForm/ProductForm";

const AddProduct = () => {
  return (
    <section className="flex  md:w-auto justify-between items-center mx-4">
      <div className="flex-1">
        <InputSearch />
      </div>
      <div className="">
        <ProductForm />
      </div>
    </section>
  );
};

export default AddProduct;
