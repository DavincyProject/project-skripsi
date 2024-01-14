"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <div className="min-h-screen p-2">
      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Page;
