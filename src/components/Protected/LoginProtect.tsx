"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginProtect = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (pathname === "/aktivasi" || pathname === "/cek") {
        return;
      }

      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn === null || isLoggedIn !== "true") {
        router.push("/login");
      }
    }
  }, [router]);

  return <div>{children}</div>;
};

export default LoginProtect;
