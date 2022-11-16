import * as React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import { parseCookies } from 'nookies';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { getProductById, valideteAcess } from '../../API';
import Loading from '../../components/Loading';
import { HeaderContext } from '../../contexts';
import Footer from '../../components/Footer';

export default function Detail() {
  const { setSelectProductName } = React.useContext(HeaderContext);
  const [product, setProduct] = React.useState(null);
  const [selectPhoto, setSelectPhoto] = React.useState(null);
  const [discount, setDiscount] = React.useState(null);
  const [installments, setInstallments] = React.useState(null);
  const [adm, setAdmin] = React.useState(false);
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
        const paymentValue = price - value;
        setInstallments(calcInstallments(paymentValue));
        return setDiscount(value);
      }
      setInstallments(calcInstallments(price));
      return calcInstallments(price);
    };

    const persistId = (id) => {
      if (id) {
        localStorage.setItem('divine.detail.product', id);
        return id;
      }
      const storageId = localStorage.getItem('divine.detail.product');

      if (storageId) return storageId;

      return router.push('/catalog');
    };

    const findProductById = async () => {
      const { query: { id } } = router;
      const idProduct = persistId(id);
      const result = await getProductById(idProduct);
      const selectPhotoStart = result.imgsList.find((item) => item.thumbnail === true);
      setSelectPhoto(selectPhotoStart);
      calcDiscount(result.price, result.promotion);
      return setProduct(result);
    };
    findProductById();

    const verifyAdm = async () => {
      const { 'divine.token': token } = parseCookies();
      const { admin } = await valideteAcess(token);
      if (admin) setAdmin(true);
    };
    verifyAdm();
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <header className="user-header">
            <Image
              src="https://drive.google.com/uc?export=view&id=1QasQHkXQwnUYo6xeGuQxBRNjVVVpkUG4"
              alt="Vercel Logo"
              width={50}
              height={50}
            />
            <h1>Divine Brazil</h1>
            <HomeSharpIcon className="header-icon" onClick={() => router.push('/catalog')} />
          </header>
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
          ) : (
            <p>
              {`R$ ${product.price}`}
            </p>
          )}
          {installments > 1 ? (
            <p>{`Em até ${installments}x sem juros no cartão`}</p>
          ) : null}
          {adm ? (
            <div>
              <EditIcon
                className="edit-icon"
                onClick={() => {
                  setSelectProductName(product.name);
                  router.push('/admin/products');
                }}
              />
            </div>
          ) : null}
          <Footer />
        </div>
      ) : <Loading />}
    </div>
  );
}
