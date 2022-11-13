import { XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import framerVariantProps from "../../../constants/framer-variant-props";
import Portal from "../../../HOC/portal";
import { FramerVariants } from "../../../types/framer-variants";

import * as yup from "yup";
import { useRef, useContext, useState, useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import useYup from "../../../hooks/use-yup";

import { EmailData } from "../../../types/email-data";
import { GlobalContext } from "../../../provider/global";
import setVariants from "../../../util/set-variants";
import Button from "../../atoms/button";
import { Flex } from "../../atoms/flex";
import useEventListener from "../../../hooks/use-event-listener";

const CONTACT_FORM_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email("That's not a valid email!")
    .required("Please enter your email!"),
  message: yup.string().required("Message can't be blank!"),
});

const WRAPPER_VARIANTS: Partial<FramerVariants> = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

const MODAL_VARIANTS: Partial<FramerVariants> = {
  initial: {
    opacity: 0,
    y: 200,
    transition: {
      ease: "anticipate",
    },
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    y: 200,
    opacity: 0,
    transition: {
      ease: "anticipate",
    },
  },
};

const Modal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { modalStore } = useContext(GlobalContext);
  const { validate, resetErrors, errors } = useYup(CONTACT_FORM_SCHEMA);
  const [values, setValues] = useState<EmailData>({
    email: "",
    message: "",
  });
  const handleClose = useCallback(() => {
    setValues({ email: "", message: "" });
    modalStore.set({ show: false });
    resetErrors();
  }, [modalStore, resetErrors]);

  const postEmail = (data: { email: string; message: string }) =>
    new Promise(async (resolve, reject) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        resolve(undefined);
        handleClose();
        setValues({ email: "", message: "" });
      } else {
        const msg = await response.text();
        reject(msg);
      }
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    if (!name) return;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = async () => {
    resetErrors();
    const isValid = await validate(values);
    if (!isValid) return;

    toast.promise(postEmail(values), {
      loading: "Sending...",
      success: "Email sent!",
      error: (err) => err,
    });
  };

  const modalVariants = useMemo(() => setVariants([MODAL_VARIANTS]), []);
  const wrapperVariants = useMemo(() => setVariants([WRAPPER_VARIANTS]), []);

  const escHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    },
    [handleClose]
  );

  useEventListener("keydown", escHandler);

  return (
    <Portal>
      <motion.div
        variants={wrapperVariants}
        {...framerVariantProps}
        className="fixed flex h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-40"
      >
        <motion.div
          variants={modalVariants}
          ref={ref}
          className="relative mb-10 flex h-fit w-4/5 flex-col space-y-2 rounded-xl bg-accent px-6 py-8 shadow-md sm:mb-0 sm:space-y-8 lg:w-1/3"
        >
          {/* <motion.div
            whileTap={{
              scale: 0.9,
            }}
            onClick={handleClose}
            className="absolute top-1 right-1 cursor-pointer rounded-full bg-gray-100 p-2 md:-top-3 md:-right-3"
          >
            <XMarkIcon className="h-6 w-6" />
          </motion.div> */}
          <h2 className="select-none text-2xl font-black text-brand">
            Contact us
          </h2>
          <div className="w-full">
            <label className="block select-none font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Your email"
              value={values.email}
              onChange={handleChange}
              className="w-full appearance-none rounded-lg px-4 py-2 focus:outline-0"
            />
            {errors.email && (
              <span className="text-sm text-black">{errors.email}</span>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="message" className="block select-none font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full appearance-none rounded-lg px-4 py-4 focus:outline-0"
              placeholder="Message..."
              rows={8}
              cols={30}
              name="message"
              value={values.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-black">{errors.message}</span>
            )}
          </div>
          <Flex className="ml-auto w-fit gap-6" direction="row">
            <Button
              onClick={handleClose}
              color="accent"
              trailingIcon={XMarkIcon}
            >
              Cancel
            </Button>
            <Button onClick={handleSend} trailingIcon={PaperAirplaneIcon}>
              Send
            </Button>
          </Flex>

          {/* <div className="absolute -bottom-6 h-fit w-fit">
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={handleSend}
              className="bg-atlantis flex appearance-none flex-row items-center rounded-full px-4 py-2 text-lg font-medium text-white focus:outline-none"
            >
              Send
              <RocketLaunchIcon className="ml-3 h-6 w-6" />
            </motion.button>
          </div> */}
        </motion.div>
      </motion.div>
    </Portal>
  );
};

export default Modal;
