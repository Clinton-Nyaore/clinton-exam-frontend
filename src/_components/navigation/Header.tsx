import { User2Icon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex place-items-center justify-between w-[90%] mx-auto border-b-2 border-b-cyan-600">
      <img src="/logo.jpeg" className="h-24" alt="" />
      <div
        className="bg-[#B9D6F2] p-4 rounded-full hover:cursor-pointer"
        id="#user-profile"
      >
        <User2Icon />
      </div>
    </div>
  );
};
export default Header;
