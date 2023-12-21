'use client';

import { motion } from 'framer-motion';
import style from './style.module.scss';
import { useContext, useState } from 'react';
import CartProduct from '../CartProduct';
import { CartContext } from '../../context/CartContext';
import CartButton from '../CartButton';
const variants = {
  open: { left: '0' },
  closed: { left: '100%' },
};

export default function Cart() {
  const [open, setOpen] = useState(false);
  const cart = useContext(CartContext);
  const toggle = () => setOpen(!open);

  const amount = Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(cart.amount);

  return (
    <>
      <CartButton toggle={toggle} count={cart.count} />
      <motion.div
        transition={{ ease: 'linear', duration: 0.5 }}
        className={style.motion}
        initial={variants.closed}
        animate={open ? 'open' : 'closed'}
        variants={variants}
      >
        <article className={style.cart}>
          <header className={style.header}>
            <h2>
              Carrinho<br></br>de compras
            </h2>
            <button onClick={toggle}>&times;</button>
          </header>

          <div className={style.list}>
            {cart.products.map((product) => (
              <CartProduct
                key={product.id}
                product={product}
                add={() => cart.add(product)}
                remove={() => cart.remove(product)}
                removeAll={() => cart.removeAll(product)}
              />
            ))}
          </div>

          <div>
            <div className={style.total}>
              <p>Total:</p>
              <p>{amount}</p>
            </div>

            <button className={style.buy}>Finalizar Compra</button>
          </div>
        </article>
      </motion.div>
    </>
  );
}
