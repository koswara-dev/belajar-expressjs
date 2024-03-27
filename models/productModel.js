let products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

module.exports = {
  getProducts: () => products,
  getProductById: (id) => products.find((product) => product.id === id),
  addProduct: (product) => products.push(product),
  updateProduct: (id, updatedProductData) => {
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...updatedProductData,
      };
      return products[productIndex];
    }
    return null;
  },
  deleteProduct: (id) => {
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      return products.splice(productIndex, 1)[0];
    }
    return null;
  },
};
