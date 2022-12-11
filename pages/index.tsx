import Head from 'next/head';

import 'index.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokémon Web</title>
        <meta name="description" content="Side project based on Pokémons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Hello world
    </div>
  );
}
