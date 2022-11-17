export function formatterForListProducts(response) {
  const productsMap = response.map((product) => {
    const newStock = product.stock.map((item) => ({
      size: item.size.name,
      quantity: item.quantity,
    }));
    const newPrice = Number(product.price.replace(',', '.')).toFixed(2);
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

export function formatterProductShow({
  name, description, photos, promotion, price, category, stock, id,
}) {
  const newStock = stock.map((item) => ({
    name: item.size.name,
    quantity: item.quantity,
    id: item.size.id,
  }));
  const newPrice = Number(price.replace(',', '.')).toFixed(2);
  const product = {
    name,
    price: newPrice,
    description,
    categoryName: category.name,
    category: category.id,
    promotion,
    imgsList: photos,
    sizesItemList: newStock,
    id,
  };
  return product;
}

export function formatterOrdersForShow(orderList) {
  const orderMap = orderList.map((order) => {
    const newOrder = {
      id: order.id,
      price: Number(order.fullPrice.replace(',', '.')).toFixed(2),
      createdAt: new Date(order.createdAt).toLocaleString(),
      installments: order.installments,
      client: {
        id: order.client.id,
        name: order.client.name,
      },
      paymentMethod: order.paymentMethod.name,
    };
    return newOrder;
  });
  return orderMap;
}
