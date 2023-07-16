import { PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import * as yup from "yup";
import useYup from "../../../hooks/use-yup";
import { EmailData } from "../../../types/email-data";
import Button from "../../atoms/button";
import { Flex } from "../../atoms/flex";
import { useModalStore } from "./package";
import Modal from "./modal-container";

const CONTACT_FORM_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email("That's not a valid email!")
    .required("Please enter your email!"),
  message: yup.string().required("Message can't be blank!"),
});

const ContactModal = () => {
  const { dismiss } = useModalStore();

  const { validate, resetErrors, errors } = useYup(CONTACT_FORM_SCHEMA);
  const [values, setValues] = useState<EmailData>({
    email: "",
    message: "",
  });
  const handleClose = useCallback(() => {
    setValues({ email: "", message: "" });
    dismiss();
    resetErrors();
  }, [dismiss, resetErrors]);

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

  return (
    <Modal>
      <h2 className="select-none text-2xl font-black text-brand">Contact us</h2>
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
        <Button onClick={handleClose} color="accent" trailingIcon={XMarkIcon}>
          Cancel
        </Button>
        <Button onClick={handleSend} trailingIcon={PaperAirplaneIcon}>
          Send
        </Button>
      </Flex>
    </Modal>
  );
};

export default ContactModal;
