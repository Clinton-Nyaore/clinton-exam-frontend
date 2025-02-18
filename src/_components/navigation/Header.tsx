import { CrossIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex place-items-center justify-between w-[90%] mx-auto border-b-2 border-b-cyan-600">
      <img src="/logo.jpeg" className="h-24" alt="" />
      <div className="bg-gray-300 p-2 hover:cursor-pointer flex space-x-2 rounded" id="#user-profile">
        <div className="rotate-45">
          <CrossIcon />
        </div>
        <span>CLOSE</span>
      </div>
    </div>
  );
};
export default Header;
