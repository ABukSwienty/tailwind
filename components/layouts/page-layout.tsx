import Head from "next/head";
import Nav from "../molecules/nav";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed w-screen py-4 px-4">
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>nav to</Nav.Item>
          <Nav.Item>nav to</Nav.Item>
          <Nav.Item>nav to</Nav.Item>
        </Nav>
      </header>

      <main className="flex flex-col pt-16">{children}</main>

      <footer className="absolute bottom-0">footer</footer>
    </>
  );
};

export default PageLayout;
