import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" width={20} height={20} alt="Search Icon" />
        <input
          type="text"
          placeholder="search.."
          className="bg-transparent w-[200px] p-2 outline-none border-none"
        />
      </div>
      {/* Icons and Users */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="message png" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" width={20} height={20} alt="announcement png" />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex justify-center items-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          width={36}
          height={36}
          alt="avatar png"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
