import Footer from "./Footer";
import NavSettings from "./NavSettings";

function Settings() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <NavSettings />
      <div className="m-2 gap-3">
        <p className="text-sm m-1">Manage</p>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <p className="text-sm grow">Auto Fill</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <p className="text-sm grow">Sync</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <p className="text-sm grow">Excluded domains</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
      </div>
      <div className="m-2 gap-3">
        <p className="text-sm m-1">Security</p>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <p className="text-sm grow">Unlock with PIN</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <p className="text-sm grow">Lock now</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <p className="text-sm grow">Two step login</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
      </div>
      <div className="m-2 gap-3 flex-grow">
        <p className="text-sm m-1">Account</p>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <p className="text-sm grow">Change master password</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <p className="text-sm grow">Log out</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Settings;
