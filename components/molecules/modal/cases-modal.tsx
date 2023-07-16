import { ArrowRightIcon } from "@heroicons/react/24/solid";
import useWindowSize from "../../../hooks/use-window-size";
import { Flex } from "../../atoms/flex";
import Title from "../../atoms/title";
import Modal from "./modal-container";

const CasesModal = () => {
  const { isMobile } = useWindowSize();
  return (
    <Modal hasPadding={false}>
      <Flex direction="col" justify="between" className={`pt-4`}>
        <Title size="2xl" className="px-4 font-black">
          Textile Exchange.
        </Title>
        <p className="my-5 max-h-96 grow px-4 text-lg font-medium">
          Tailwind worked closely with Textile Exchange in developing their
          Annual membership conference in Colorado. This included curation and
          framing of panels, the overall framework of the program and guidance
          on the content and flow of the individual sessions. Tailwind also
          moderated two sessions one on how to communicate about sustainabity
          and the second on diversity and inclusion in the fashion space.
        </p>
        <div
          className={`group flex items-center justify-center rounded-b-lg bg-accent-600 transition-colors duration-300 ease-in-out hover:bg-accent-600 ${
            isMobile ? "pb-12" : ""
          }`}
        >
          <a
            href={"#"}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center p-4 text-lg"
          >
            Check out more here
            <ArrowRightIcon className="ml-3 h-6 w-6 transition-all duration-300 ease-in-out group-hover:ml-6 group-hover:scale-x-110" />
          </a>
        </div>
      </Flex>
    </Modal>
  );
};

export default CasesModal;
