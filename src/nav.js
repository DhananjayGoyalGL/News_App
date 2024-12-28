import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <a className="flex title-font font-medium items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-1 text-xxl">News By Developer</span>
        </a>
        <nav className="items-center">
          <Link
            className="mr-5 hover:text-gray-900"
            to="/Apple"
            class="nav-button"
          >
            Apple
          </Link>
          <Link
            className="mr-5 hover:text-gray-900"
            to="/Tesla"
            class="nav-button"
          >
            Tesla
          </Link>
          <Link
            className="mr-5 hover:text-gray-900"
            to="/Bitcoin"
            class="nav-button"
          >
            Bitcoin
          </Link>
          <Link
            className="mr-5 hover:text-gray-900"
            to="/Nasa"
            class="nav-button"
          >
            Nasa
          </Link>
          <Link
            className="mr-5 hover:text-gray-900"
            to="/upsc"
            class="nav-button"
          >
            UPSC
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
