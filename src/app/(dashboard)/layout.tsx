import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* left */}
    <div className="w-[17%] md:w-[18%] lg:w-[17%] xl:w-[17%] lg:p-5">
      <Link href='/' className="flex justify-center items-center">
        <Image src='/logo.png' width={100} height={100} alt={"logo"}/>
        {/* <span className="hidden lg:block">VijayJi</span> */}
      </Link>
      <Menu/>
    </div>
    {/* right */}
    <div className="w-[83%] md:w-[82%] lg:w-[83%] xl:w-[83%] bg-[#f7f8fA] overflow-scroll scrollbar-none">
      <Navbar/>
      {children}
    </div>
  </div>;
}
