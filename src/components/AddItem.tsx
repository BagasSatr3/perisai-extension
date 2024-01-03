import NavAddItem from "./NavAddItem";

function AddItem() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <NavAddItem />
      <div className="m-2 gap-3">
        <p className="text-sm m-1">Item Information</p>
        <div className="shadow-xl types rounded mb-2">
          <p className="pt-2 pl-2">Type</p>
          <div className="m-1 p-1 flex items-center gap-2">
            <select
              name=""
              id=""
              className="rounded p-2 bg-gray-700 hover:bg-gray-600 text-sm w-full"
            >
              <option value="login">Login</option>
              <option value="note">Note</option>
              <option value="card">Card</option>
            </select>
          </div>
        </div>
        <div className="shadow-xl types rounded mb-2">
          <p className="pt-2 pl-2">Name</p>
          <div className="m-1 p-1 flex items-center gap-2">
            <input
              type="text"
              className="rounded p-2 bg-gray-700 hover:bg-gray-600 text-sm w-full"
            />
          </div>
        </div>
        <div className="shadow-xl types rounded mb-2">
          <p className="pt-2 pl-2">Note</p>
          <div className="m-1 p-1 flex items-center gap-2">
            <textarea className="rounded p-2 bg-gray-700 hover:bg-gray-600 text-sm w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
