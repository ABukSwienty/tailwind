import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import GlobalProvider from "../provider/global";
import NavHider from "../components/atoms/nav-hider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <GlobalProvider>
        <NavHider />
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}

export default MyApp;
