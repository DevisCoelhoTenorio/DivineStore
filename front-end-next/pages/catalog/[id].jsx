import * as React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getProductById } from '../../API';
import Loading from '../../components/Loading';

export default function Detail() {
  const [product, setProduct] = React.useState(null);
  const [selectPhoto, setSelectPhoto] = React.useState(null);
  const [discount, setDiscount] = React.useState(null);
  const [installments, setInstallments] = React.useState(null);
  const router = useRouter();

  React.useEffect(() => {
    const calcInstallments = (price) => {
      const minInstallment = 100;
      let countInstallment = 0;
      let currentValue = price;

      while (currentValue > 100) {
        currentValue -= minInstallment;
        countInstallment += 1;
      }
      return countInstallment;
    };

    const calcDiscount = (price, promotion) => {
      if (promotion && promotion !== 0) {
        const value = ((price * promotion) / 100);
        setInstallments(calcInstallments(price - value));
        return setDiscount(value);
      }
      return calcInstallments(price);
    };

    const findProductById = async () => {
      const { query: { id } } = router;
      if (!id) return router.push('/catalog');
      const result = await getProductById(id);
      const selectPhotoStart = result.imgsList.find((item) => item.thumbnail === true);
      setSelectPhoto(selectPhotoStart);
      calcDiscount(result.price, result.promotion);
      return setProduct(result);
    };
    findProductById();
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <div>
            {product.imgsList.map((photo) => (
              <input
                type="image"
                key={photo.img}
                src={photo.img}
                alt={photo.img}
                width="80"
                height="80"
                onClick={() => setSelectPhoto(photo)}
              />
            ))}
            <Image src={selectPhoto.img} alt={selectPhoto.img} width={500} height={300} />
          </div>
          <p>{product.description}</p>
          <h5>{product.categoryName}</h5>
          <div>
            <h6>Disponível nos tamanhos:</h6>
            {product.sizesItemList.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div>
          {product.promotion ? (
            <p>
              {`De R$ ${product.price} por R$${(product.price - discount).toFixed(2)}`}
            </p>
          ) : null}
          <p>{`Em até ${installments} sem juros`}</p>
        </div>
      ) : <Loading />}
    </div>
  );
}
