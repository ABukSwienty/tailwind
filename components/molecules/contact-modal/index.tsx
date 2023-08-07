import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useContext, useSyncExternalStore } from "react";

import { GlobalContext } from "../../../provider/global";

const Modal = dynamic(() => import("./modal"), { ssr: false });

export interface ContactModalProps {}

const ContactModal = ({}: ContactModalProps) => {
  const { modalStore } = useContext(GlobalContext);

  const showModal = useSyncExternalStore(
    modalStore.subscribe,
    () => modalStore.get().show,
    () => modalStore.get().show
  );

  return <AnimatePresence>{showModal && <Modal />}</AnimatePresence>;
};

export default ContactModal;
