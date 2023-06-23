const productsData = async () => {
  const products = await fetch("http://localhost:3030/products").then((e) =>
    e.json()
  );
  return products;
};

export default productsData;
