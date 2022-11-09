import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>header</header>

      <main>main</main>

      <footer>footer</footer>
    </div>
  );
};

export default Home;
