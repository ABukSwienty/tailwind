import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import GlobalProvider from "../provider/global";
import NavHider from "../components/atoms/nav-hider";
import { ModalContainer } from "../components/molecules/modal/package";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <GlobalProvider>
        {/* <NavHider /> */}
        <Component {...pageProps} />
        <ModalContainer inner={AnimatePresence} />
      </GlobalProvider>
    </>
  );
}

export default MyApp;
