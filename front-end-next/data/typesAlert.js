const ALERT_TYPES = {
  registerProductSuccess: { type: 'success', message: 'Produto cadastrado com sucesso!' },
  registerProductFailure: { type: 'error', message: 'Fotos e Tamanhos são obrigatórios' },
  addPhotoFailure: { type: 'error', message: 'Essa foto já foi adicionada!' },
  deletedProductSuccess: { type: 'success', message: 'Produto deletado com sucesso!' },
  updateProductSuccess: { type: 'success', message: 'Produto atualizado com sucesso!' },
};

export default ALERT_TYPES;
