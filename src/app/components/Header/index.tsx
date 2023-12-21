import style from './style.module.scss';
import Cart from '../Cart';

export default function Header() {
  return (
    <header className={style.header}>
      <h1>
        MKS <small>Sistemas</small>
      </h1>

      <Cart />
    </header>
  );
}
