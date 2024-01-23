import Image from "next/image";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="m-2">
        <div className="navbar-start w-fit min-w-72">
          <div className="flex items-center justify-center gap-2">
            <div>
              <Image alt="logo bsi" src="logo_bsi.svg" width={45} height={45} />
            </div>
            <div className="text-xs sm:text-sm md:text-md lg:text-base">
              <h1 className="m-0 font-bold">
                SIAKAD STUDENT
                <br />
                <span className="font-normal text-xs sm:text-sm md:text-md lg:text-base">
                  Universitas Bina Sarana Informatika
                </span>
              </h1>
            </div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}
