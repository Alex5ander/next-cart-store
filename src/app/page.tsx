import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import styles from './page.module.css';
import { getProducts } from './services/Product';

export default async function Home() {
  const request = await getProducts();
  return (
    <main className={styles.main}>
      <Header />
      <ProductList products={request?.products || []} />
      <Footer />
    </main>
  );
}
