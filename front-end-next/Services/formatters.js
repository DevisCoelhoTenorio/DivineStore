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

export function formatterForInitalEditState({
  name, description, photos, promotion, price, category, stock,
}) {
  const newStock = stock.map((item) => ({
    name: item.size.name,
    quantity: item.quantity,
    id: item.size.id,
  }));
  const newPrice = Number(price.replace(',', '.'));
  const product = {
    name,
    price: newPrice,
    description,
    category: category.id,
    promotion,
    imgsList: photos,
    sizesItemList: newStock,
  };
  return product;
}

export default formatterForListProducts;
