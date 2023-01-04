import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Button from "../components/atoms/button";
import Title from "../components/atoms/title";

const FiveHundred = () => {
  const router = useRouter();
  const handleReturn = useCallback(() => {
    router.push("/");
  }, [router]);
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-12 bg-brand">
      <Title
        size="3xl"
        className="text-center font-black text-white md:text-7xl"
      >
        Servor error
      </Title>
      <p className="mx-8 text-center text-white">
        Something went wrong while trying to load this page. Please wait and try
        again.
      </p>
      <Button
        onClick={handleReturn}
        size="lg"
        color="accent"
        leadingIcon={ArrowLeftIcon}
      >
        Go back
      </Button>
    </div>
  );
};

export default FiveHundred;
