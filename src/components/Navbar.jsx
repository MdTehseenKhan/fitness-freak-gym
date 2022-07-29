import { Link } from "react-router-dom"

import Logo from "../assets/images/Logo.png"

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={Logo}
          alt="Fitness Craze"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <div>
        <button>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </button>
        <a href="#exercises">Exercises</a>
      </div>
    </div>
  )
}

export default Navbar
