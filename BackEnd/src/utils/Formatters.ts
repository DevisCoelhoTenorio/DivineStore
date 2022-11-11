import { ISize, IPhoto } from '../interfaces';

export function formatterSizeForCreate(sizesList: ISize[], id: number) {
  const inventoryWithId = sizesList.map((inventory) => ({
    productId: id,
    quantity: inventory.quantity,
    sizeId: inventory.id,
  }));
  return inventoryWithId;
}

export function formatterPhotosForCreate(photosList: IPhoto[], id: number) {
  const photosWithId = photosList.map((photo) => ({ ...photo, productId: id }));
  return photosWithId;
}
