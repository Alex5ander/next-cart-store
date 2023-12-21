import { IProduct } from '@/app/services/Product';
import Product from '../Product';
import style from './style.module.scss';

interface Props {
  products: IProduct[];
}

export default function ProductList({ products }: Props) {
  return (
    <div className={style.productList} data-testid="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
