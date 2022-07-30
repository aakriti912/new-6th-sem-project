import NoteCard from "./Note/NoteCard";
import Card from "./Reuseable/Card";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Dashboard = () => {
  return (
    <div class="min-h-full">
      <nav class="bg-[#6A91A0]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/000/584/441/original/n-letter-arrow-logo-template-illustration-design-vector-eps-10.jpg"
                />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/dashboard"
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to=""
                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    profile
                  </Link>

                  <Link
                    to="/post"
                    href="#"
                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    post
                  </Link>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <div class="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <Link to="/profile">
                        <img
                          class="h-8 w-8 rounded-full"
                          src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg"
                          alt=""
                        />
                      </Link>
                    </button>
                  </div>
                </div>
                <div class="flex mt-4 space-x-3 lg:mt-6 float-right">
                  <Link
                    to="/login"
                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex justify-center m-5 relative bottom-[10px] border-2 border-black"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden"></div>
          </div>
        </div>
      </nav>

      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"></div>
      </header>
    </div>
  );
};

export default Dashboard;
