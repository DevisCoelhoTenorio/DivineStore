"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatterPhotosForCreate = exports.formatterSizeForCreate = void 0;
function formatterSizeForCreate(sizesList, id) {
    const inventoryWithId = sizesList.map((inventory) => ({
        productId: id,
        quantity: inventory.quantity,
        sizeId: inventory.id,
    }));
    return inventoryWithId;
}
exports.formatterSizeForCreate = formatterSizeForCreate;
function formatterPhotosForCreate(photosList, id) {
    const photosWithId = photosList.map((photo) => ({ ...photo, productId: id }));
    return photosWithId;
}
exports.formatterPhotosForCreate = formatterPhotosForCreate;
//# sourceMappingURL=Formatters.js.map