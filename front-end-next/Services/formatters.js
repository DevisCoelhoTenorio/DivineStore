function formatterForListProducts(response) {
  const productsMap = response.map((product) => {
    const newStock = product.stock.map((item) => ({
      size: item.size.name,
      quantity: item.quantity,
    }));
    const newPrice = Number(product.price.replace(',', '.'));
    const newPhoto = product.photos.find((img) => img.thumbnail === true);
    const newProduct = {
      ...product,
      stock: newStock,
      photos: newPhoto,
      price: newPrice,
    };
    return newProduct;
  });
  return productsMap;
}

export default formatterForListProducts;
