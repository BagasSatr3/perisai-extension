import Footer from "./Footer";
import { CiStickyNote } from "react-icons/ci";
import { FaCreditCard } from "react-icons/fa";
import { LiaSignInAltSolid } from "react-icons/lia";
import NavItems from "./NavItems";

function Items() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <NavItems />
      <div className="m-2 gap-3">
        <p className="text-sm m-1">Items</p>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <FaCreditCard size={24} />
            <p className="text-sm">Card</p>
            <p className="grow text-right text-sm">0</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <CiStickyNote size={24} />
            <p className="text-sm">Notes</p>
            <p className="grow text-right text-sm">0</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <LiaSignInAltSolid size={24} />
            <p className="text-sm">Login</p>
            <p className="grow text-right text-sm">0</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
      </div>
      <div className="m-2 gap-3 flex-grow">
        <p className="text-sm m-1">Recent Items</p>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <CiStickyNote size={24} />
            <p className=" text-sm">This day will be the best!</p>
            <p className="grow text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <CiStickyNote size={24} />
            <p className="text-sm">It's not...</p>
            <p className="grow text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <FaCreditCard size={24} />
            <p className="text-sm">MasterCard</p>
            <p className="grow text-right text-sm">{">"}</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Items;
