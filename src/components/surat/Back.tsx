import Link from "next/link";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Back = ({ url, text }: { url: string; text: string }) => {
  return (
    <>
      <Link
        href={url}
        className="flex items-center gap-1 hover:text-blue-400 font-bold w-fit"
      >
        <IoMdArrowRoundBack />
        {text ? text : "Kembali ke HomePage"}
      </Link>
      <br />
    </>
  );
};

export default Back;
