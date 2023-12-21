import style from './style.module.scss';

interface Props {
  toggle(): void;
  count: number;
}

export default function CartButton({ toggle, count }: Props) {
  return (
    <button
      data-testid="cart-button"
      className={style.cartButton}
      onClick={toggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
      >
        <path
          d="M1.00971 0.0888977C0.821031 0.0888977 0.666656 0.244898 0.666656 0.435564C0.666656 0.626231 0.821031 0.782231 1.00971 0.782231H2.34763L2.63923 1.87423C2.63923 1.89156 2.63923 1.9089 2.63923 1.9089L3.737 6.05156C3.737 6.05156 3.737 6.05156 3.737 6.0689L4.09721 7.45556C4.13152 7.61156 4.26874 7.71556 4.42311 7.71556H9.912C10.1007 7.71556 10.2551 7.55956 10.2551 7.3689C10.2551 7.17823 10.1007 7.02223 9.912 7.02223H4.69756L4.50888 6.29423L10.6324 5.98223C10.7868 5.98223 10.924 5.8609 10.9583 5.7049L11.6444 1.89156C11.6616 1.78756 11.6273 1.68356 11.5758 1.61423C11.5072 1.52756 11.4043 1.47556 11.3014 1.47556H3.23957L2.94798 0.348898C2.89652 0.192898 2.7593 0.0888977 2.60492 0.0888977H1.00971ZM5.12638 2.86223C5.31506 2.86223 5.46943 3.01823 5.46943 3.2089V4.59556C5.46943 4.78623 5.31506 4.94223 5.12638 4.94223C4.9377 4.94223 4.78332 4.78623 4.78332 4.59556V3.2089C4.78332 3.01823 4.9377 2.86223 5.12638 2.86223ZM7.18471 2.86223C7.37339 2.86223 7.52777 3.01823 7.52777 3.2089V4.59556C7.52777 4.78623 7.37339 4.94223 7.18471 4.94223C6.99603 4.94223 6.84166 4.78623 6.84166 4.59556V3.2089C6.84166 3.01823 6.99603 2.86223 7.18471 2.86223ZM9.24304 2.86223C9.43173 2.86223 9.5861 3.01823 9.5861 3.2089V4.59556C9.5861 4.78623 9.43173 4.94223 9.24304 4.94223C9.05436 4.94223 8.89999 4.78623 8.89999 4.59556V3.2089C8.89999 3.01823 9.05436 2.86223 9.24304 2.86223ZM5.12638 8.4089C4.56034 8.4089 4.09721 8.8769 4.09721 9.4489C4.09721 10.0209 4.56034 10.4889 5.12638 10.4889C5.69242 10.4889 6.15555 10.0209 6.15555 9.4489C6.15555 8.8769 5.69242 8.4089 5.12638 8.4089ZM9.24304 8.4089C8.677 8.4089 8.21388 8.8769 8.21388 9.4489C8.21388 10.0209 8.677 10.4889 9.24304 10.4889C9.80909 10.4889 10.2722 10.0209 10.2722 9.4489C10.2722 8.8769 9.80909 8.4089 9.24304 8.4089Z"
          fill="black"
        />
      </svg>
      <p data-testid="cart-count">{count}</p>
    </button>
  );
}
