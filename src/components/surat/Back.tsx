import Link from "next/link";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Back = ({ url }: { url: string }) => {
  return (
    <>
      <Link
        href={url}
        className="flex items-center gap-1 hover:text-blue-400 font-bold"
      >
        <IoMdArrowRoundBack />
        Kembali
      </Link>
      <br />
    </>
  );
};

export default Back;
