import Button from "../Button/Button";
import InputSearch from "../InputSearch/InputSearch";

const AddProduct = () => {
  return (
    <section className="flex  md:w-auto justify-between items-center mx-4">
      <div className="flex-1">
        <InputSearch />
      </div>
      <div className="">
        <Button />
      </div>
    </section>
  );
};

export default AddProduct;
