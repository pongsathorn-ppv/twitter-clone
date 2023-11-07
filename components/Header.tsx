import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="border-b-[1px] border-neutral-800 p-5 ">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className=" cursor-pointer hover:opacity-70 transition"
          />
        )}
        <h1 className=" text-white text-xl font-semibold">
          {" "}
          {label}{" "}
          <p className=" text-neutral-500 text-sm">
            Not the real Twitter site! This website is created for educational
            purpose only!
          </p>
        </h1>
      </div>
    </div>
  );
};

export default Header;
