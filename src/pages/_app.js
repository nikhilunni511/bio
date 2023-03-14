import '../styles/globals.scss'
import { Provider } from 'react-redux';
import store from '../store';
import Script from 'next/script';
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Script src="/service-worker.js" strategy="beforeInteractive" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
