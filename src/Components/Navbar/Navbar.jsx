import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { GiCamel } from "react-icons/gi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from '../Navbar/ResponsiveMenu';


export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  
  {
    name: "Sign Up",
    link: "/signup",
  },
  {
    name: "Cites",
    link: "/cities",
  },

];
const DropdownLinks = [

];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
    <nav className="fixed top-0 right-0 w-full z-50 backdrop-blur-sm bg-black/20 text-white shadow-md">
    <div className="container py-3 sm:py-0" >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 font-bold text-2xl"> 
          <Link to={"/"} onClick={() => window.scrollTo(0,0)}>
            <div> <GiCamel /></div>
          </Link>
        </div>
        <div className=" hidden md:block">
          <ul className=" flex items-center gap-6">
            <li className="py-4">
              <NavLink to={"/"} className={({ isActive }) => isActive ? "text-quaternary" : ""}>
                Home
              </NavLink>
            </li>
           
            <li className="py-4">
              <NavLink to={"/cities"} className={({ isActive }) => isActive ? "text-quaternary" : ""}>
                Cities
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink to={"/signup"} className={({ isActive }) => isActive ? "text-quaternary" : ""}>
                Signup
              </NavLink>
            </li>
               <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                   <ul className="space-y-3">
                       {DropdownLinks.map((data) => (
                          <li key={data.name}>
                           <a
                             className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                             href={data.link}>
                             {data.name}
                           </a>
                        </li>
                       ))}
                    </ul>
                </div>
          </ul>
        </div>
        <div className="flex items-center gap-4">
        <button
                className="bg-gradient-to-r from-primary to-quaternary hover:from-quaternary hover:to-primary transition-all duration-300 text-white px-3 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Book Now
              </button>
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
        </div>
        
      </div>

    </div>
    <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
    </>
  )
}

export default Navbar