'use client';

import { createContext, useMemo, useState } from 'react';
import { IProduct } from '../services/Product';

export interface ICartProduct extends IProduct {
  amount: number;
}

interface ICartContext {
  products: ICartProduct[];
  add(product: ICartProduct): void;
  remove(product: ICartProduct): void;
  removeAll(product: ICartProduct): void;
  amount: number;
  count: number;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  add: () => {},
  remove: () => {},
  removeAll: () => {},
  amount: 0,
  count: 0,
});

export function CartProvider({ children }: any) {
  const [products, setProducts] = useState<ICartProduct[]>([]);

  const add = (selected: ICartProduct) => {
    const product = products.find((e) => e.id == selected.id);
    if (!product) {
      products.push(selected);
    } else {
      product.amount += 1;
    }
    setProducts([...products]);
  };

  const remove = (selected: ICartProduct) => {
    const product = products.find((e) => e.id == selected.id);
    if (product) {
      if (product.amount > 1) {
        product.amount -= 1;
      } else {
        products.splice(products.indexOf(product), 1);
      }
      setProducts([...products]);
    }
  };

  const removeAll = (selected: ICartProduct) =>
    setProducts(products.filter((product) => product.id != selected.id));

  const amount = useMemo(
    () =>
      products.reduce(
        (prev, curr) => prev + curr.amount * Number(curr.price),
        0
      ),
    [products]
  );

  const count = useMemo(
    () => products.reduce((prev, curr) => prev + curr.amount, 0),
    [products]
  );

  return (
    <CartContext.Provider
      value={{ products, add, remove, removeAll, count, amount }}
    >
      {children}
    </CartContext.Provider>
  );
}
