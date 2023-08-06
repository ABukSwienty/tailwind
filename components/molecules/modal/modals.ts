import CasesModal from "./cases-modal";
import ContactModal from "./contact-modal";
import { createModals } from "./package";

export const modals = createModals({
  contact: ContactModal,
  //@ts-ignore
  case: CasesModal,
});
