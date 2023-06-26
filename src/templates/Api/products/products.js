import { MUTATE_PRODUCT_URL, GET_PRODUCTS } from "./constants";

export const deleteProduct = async (id) => {
  try {
    await fetch(`${MUTATE_PRODUCT_URL}${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error.error;
  }
};

export const getProducts = async () => {
  const products = await fetch(GET_PRODUCTS).then((e) => e.json());
  return products;
};

export const createProduct = async (data) => {
  try {
    const response = await fetch(MUTATE_PRODUCT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Ocorreu um erro");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error.error;
  }
};
export const updateProduct = async (data, id) => {
  try {
    const response = await fetch(`${MUTATE_PRODUCT_URL}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Ocorreu um erro");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error.error;
  }
};

// outras formas de fazer
// export const getProducts = async () => {
//   const res = await fetch(GET_PRODUCTS);
//   const products = await res.json();
//   return products;
// };

// export const getProducts2 = async () => {
//   return fetch(GET_PRODUCTS).then((e) => e.json());
// };
