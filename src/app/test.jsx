import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import ProductList from './components/ProductList';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import { products } from '../products.json';

test('Teste da lista de produtos', async () => {
  const { getByTestId, getAllByTestId } = render(
    <ProductList products={products} />
  );
  await waitFor(() => expect(getByTestId('product-list')).toBeInTheDocument());
  await waitFor(() =>
    expect(getAllByTestId('product').length > 0).toBeTruthy()
  );
});

test('Teste de adição de produto no carrinho', async () => {
  const { getByTestId, getAllByTestId } = render(
    <CartProvider>
      <Cart />
      <ProductList products={products} />
    </CartProvider>
  );
  await waitFor(() => expect(getByTestId('product-list')).toBeDefined());
  await waitFor(() =>
    expect(getAllByTestId('product').length > 0).toBeTruthy()
  );
  const productAddButton = getAllByTestId('add-product')[0];
  fireEvent.click(productAddButton);
  await waitFor(() =>
    expect(getByTestId('cart-count').textContent).toContainEqual('1')
  );
});

test('Teste de remoção de produto no carrinho', async () => {
  const { getByTestId, getAllByTestId } = render(
    <CartProvider>
      <Cart />
      <ProductList products={products} />
    </CartProvider>
  );
  await waitFor(() => expect(getByTestId('product-list')).toBeDefined());
  await waitFor(() =>
    expect(getAllByTestId('product').length > 0).toBeTruthy()
  );

  const productAddButton = getAllByTestId('add-product')[0];
  fireEvent.click(productAddButton);

  await waitFor(() =>
    expect(getByTestId('cart-count').textContent).toContainEqual('1')
  );

  const productRemoveButton = getAllByTestId('remove-one-product')[0];
  fireEvent.click(productRemoveButton);

  await waitFor(() =>
    expect(getByTestId('cart-count').textContent).toContainEqual('0')
  );
});
