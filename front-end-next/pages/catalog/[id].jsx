import * as React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import { parseCookies } from 'nookies';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getProductById, valideteAcess } from '../../API';
import Loading from '../../components/Loading';
import { HeaderContext } from '../../contexts';
import Footer from '../../components/Footer';

const BASE_URL = 'http://localhost:3000/catalog/';

export default function Detail() {
  const { setSelectProductName } = React.useContext(HeaderContext);
  const [product, setProduct] = React.useState(null);
  const [selectPhoto, setSelectPhoto] = React.useState(null);
  const [discount, setDiscount] = React.useState(null);
  const [installments, setInstallments] = React.useState(null);
  const [adm, setAdmin] = React.useState(false);
  // const [idProductActive, setIdProductActive] = React.useState(null);
  const router = useRouter();

  const interestMessage = `Olá,%20estou%20interessado(a)%20nesse%20produto:%20${BASE_URL}${router.query.id}`;

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

    const findProductById = async () => {
      if (!router.isReady) return;
      const { query: { id } } = router;
      const result = await getProductById(id);
      const selectPhotoStart = result.imgsList.find((item) => item.thumbnail === true);
      setSelectPhoto(selectPhotoStart);
      calcDiscount(result.price, result.promotion);
      setProduct(result);
    };
    findProductById();

    const verifyAdm = async () => {
      const { 'divine.token': token } = parseCookies();
      const { admin } = await valideteAcess(token);
      if (admin) setAdmin(true);
    };
    verifyAdm();
  }, [router.isReady]);

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
            <h1>Detalhes</h1>
            <HomeSharpIcon className="header-icon" onClick={() => router.push('/catalog')} />
          </header>
          <h1 className="detail-title">{product.name}</h1>
          <div className="detail-item-container">
            <div className="left-side-wide-view">
              <div className="images-container">
                <div className="side-images-container">
                  {product.imgsList.map((photo) => (
                    <input
                      type="image"
                      key={photo.img}
                      src={photo.img}
                      alt={photo.img}
                      width="40"
                      height="53"
                      onClick={() => setSelectPhoto(photo)}
                    />
                  ))}
                </div>
                <Image
                  className="main-detail-image"
                  src={selectPhoto.img}
                  alt={selectPhoto.img}
                  width="262"
                  height="349"
                />
              </div>
            </div>
            <div className="detail-info-container">
              <h3>Descrição:</h3>
              <p>{product.description}</p>

              <h3>Disponível nos tamanhos:</h3>
              <div className="available-size-container">
                {product.sizesItemList.map((item) => (
                  <p className="available-size-item" key={item.id}>{item.name}</p>
                ))}
              </div>

              {product.promotion ? (
                <p>
                  De
                  {' '}
                  <span className="price-before-discount">
                    R$
                    {product.price}
                  </span>
                  {' '}
                  por
                  {' '}
                  <span className="price-after-discount">
                    R$
                    {(product.price - discount).toFixed(2)}
                  </span>
                </p>
              ) : (
                <p>
                  <span className="price-after-discount">
                    R$
                    {product.price}
                  </span>
                </p>
              )}
              {installments > 1 ? (
                <p>{`Em até ${installments}x sem juros no cartão`}</p>
              ) : null}
              <Link
                target="_blank"
                href={`https://wa.me/5582981795512?text=${interestMessage}`}
                className="contact-detail-link"
              >
                <WhatsAppIcon className="whats-app-icon" />
                <p>Entre em contato e garanta o seu!</p>
              </Link>
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
            </div>
          </div>
          <Footer />
        </div>
      ) : <Loading />}
    </div>
  );
}
