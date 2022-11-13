import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { GlobalContext } from "../../provider/global";
import Button from "./button";

const CTA = () => {
  const { introRef, understandRef, modalStore } = useContext(GlobalContext);
  const handleModal = () => modalStore.set({ show: true });
  return (
    <Button
      color="secondary"
      className="bg-accent font-semibold ring-offset-accent"
      trailingIcon={PaperAirplaneIcon}
      onClick={handleModal}
    >
      Get in touch
    </Button>
  );
};

export default CTA;
