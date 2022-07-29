import { Link } from "react-router-dom"
import ThemeMode from "./ThemeMode"

import Logo from "../assets/images/Logo.png"

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font w-full md:w-1/2 md:float-left">
        <div className="mx-auto flex flex-wrap px-5 py-1 flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to="/">
              <img
                src={Logo}
                alt="Fitness Craze"
                className="w-6, h-6 mx-0 my-5"
              />
            </Link>
            <span className="ml-3 text-2xl dark:text-gray-100">
              Fitness Freak
            </span>
          </a>
          <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              className="mr-5 hover:text-indigo-900 dark:text-gray-100 dark:hover:text-indigo-400"
            >
              Home
            </Link>
            <a
              href="#exercises"
              className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-0 dark:text-gray-100 dark:hover:text-indigo-400"
            >
              Exercises
            </a>
            <ThemeMode />
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
