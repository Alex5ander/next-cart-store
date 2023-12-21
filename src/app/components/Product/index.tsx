'use client';

import Image from 'next/image';
import style from './style.module.scss';
import { IProduct } from '../../services/Product';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  const price = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumSignificantDigits: 2,
  })
    .format(parseInt(product.price))
    .replace(/\s/, '');

  const cart = useContext(CartContext);

  return (
    <div className={style.product} data-testid="product">
      <div className={style.image}>
        <Image
          priority
          alt={product.name}
          src={product.photo}
          fill
          sizes="(min-width:640px) 512px, 256px"
        />
      </div>

      <div className={style.info}>
        <p className={style.name}>{product.name}</p>
        <span className={style.price}>{price}</span>
      </div>

      <p className={style.description}>{product.description}</p>

      <button
        className={style.buy}
        data-testid="add-product"
        onClick={() => cart.add({ ...product, amount: 1 })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="19"
          viewBox="0 0 17 19"
          fill="none"
        >
          <path
            opacity="0.737212"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.9312 1.66058L1.62845 4.7693V15.6498C1.62845 16.5083 2.31577 17.2042 3.16362 17.2042H13.9098C14.7576 17.2042 15.445 16.5083 15.445 15.6498V4.7693L13.1422 1.66058H3.9312Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.737212"
            d="M1.62845 5.54648H15.445"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.737212"
            d="M11.9908 8.56885C11.9908 9.99959 10.6377 11.1594 8.96847 11.1594C7.29927 11.1594 5.94611 9.99959 5.94611 8.56885"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>COMPRAR</span>
      </button>
    </div>
  );
}
