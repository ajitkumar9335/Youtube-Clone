import { RiAccountCircleLine } from "react-icons/ri";
import { RiVideoUploadLine } from "react-icons/ri";

function Header() {
  return (
    <header className=""> {/* moves header right of sidebar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">

        <h1 className="text-xl font-semibold">YouTube Clone</h1>

        {/* Search Bar */}
        <form className="w-1/2 hidden md:block">
          <div className="relative">
            <input
              type="search"
              className="block w-full p-3 pl-10 bg-gray-700 border border-gray-600 text-white rounded-full outline-none focus:ring-1 focus:ring-white"
              placeholder="Search"
            />
            <button
              type="button"
              className="absolute right-2 top-2 bg-gray-600 px-3 py-1 rounded-full"
            >
              Search
            </button>
          </div>
        </form>

        {/* Right Icons */}
        <ul className="flex items-center space-x-4">

          <div className="flex border p-2 rounded-full cursor-pointer hover:bg-gray-700">
            <RiVideoUploadLine size={22} />
          </div>

          <div className="flex border p-2 rounded-full cursor-pointer hover:bg-gray-700 text-align-center">
            <RiAccountCircleLine size={22} /> Sign In
          </div>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
