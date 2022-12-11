import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Pokémon Web</title>
        <meta name="description" content="Side project based on Pokémons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
