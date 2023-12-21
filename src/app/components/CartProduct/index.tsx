import { ICartProduct } from '@/app/context/CartContext';
import Image from 'next/image';
import style from './style.module.scss';

interface Props {
  add(): void;
  remove(): void;
  removeAll(): void;
  product: ICartProduct;
}

export default function CartProduct({
  add,
  remove,
  removeAll,
  product,
}: Props) {
  const price = Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(Number(product.price) * product.amount);
  return (
    <div className={style.cartProduct}>
      <button onClick={removeAll} className={style.remove}>
        x
      </button>

      <div className={style.image}>
        <Image
          loading="lazy"
          alt={product.name}
          src={product.photo}
          fill
          sizes="(min-width:640px) 512px, 256px"
        />
      </div>

      <h3>{product.name}</h3>

      <div className={style.footer}>
        <div className={style.buy}>
          <button data-testid="remove-one-product" onClick={remove}>
            -
          </button>
          <p data-testid="product-amount">{product.amount}</p>
          <button data-testid="add-one-product" onClick={add}>
            +
          </button>
        </div>

        <span className={style.price}>{price}</span>
      </div>
    </div>
  );
}
