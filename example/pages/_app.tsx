import '../styles/globals.css';
import { Provider } from '@web3-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <Provider network={1}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
