import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { isMobile } from "react-device-detect";
import { SanityTypes } from "../../../types/sanity-data";
import { Flex } from "../../atoms/flex";
import Title from "../../atoms/title";
import Modal from "./modal-container";

export interface CasesModalProps {
  clientCase: SanityTypes.SectionCase;
}

const CasesModal = ({ clientCase }: CasesModalProps) => {
  return (
    <Modal hasPadding={false}>
      <Flex direction="col" justify="between" className={`pt-4`}>
        <Title size="2xl" className="px-4 font-black">
          {clientCase.title}
        </Title>
        <div className="my-5 max-h-96 grow overflow-scroll px-4 text-lg font-medium">
          <p>{clientCase.subTitle}</p>
          {clientCase.description && (
            <p className="mt-4 text-base font-normal">
              {clientCase.description}
            </p>
          )}
        </div>

        <div
          className={`group flex items-center justify-center rounded-b-lg bg-accent-600 transition-colors duration-300 ease-in-out hover:bg-accent-600 ${
            isMobile ? "pb-12" : ""
          }`}
        >
          <a
            href={clientCase.link}
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
