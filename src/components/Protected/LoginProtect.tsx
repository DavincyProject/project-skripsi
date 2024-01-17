"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginProtect = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("isLoggedIn");

      if (isLoggedIn === null || isLoggedIn !== "true") {
        router.push("/login");
      }
    }
  }, [router]);

  return <div>{children}</div>;
};

export default LoginProtect;
