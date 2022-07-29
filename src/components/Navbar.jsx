import { Link } from "react-router-dom"

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
            <span className="ml-3 text-2xl">Fitness Freak</span>
          </a>
          <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-indigo-900">
              Home
            </Link>
          </nav>
          <a
            href="#exercises"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-0"
          >
            Exercises
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar
