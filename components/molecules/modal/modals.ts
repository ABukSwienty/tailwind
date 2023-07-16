import CasesModal from "./cases-modal";
import ContactModal from "./contact-modal";
import { createModals } from "./package";

export const modals = createModals({
  test: CasesModal,
  contact: ContactModal,
  case: CasesModal,
});
