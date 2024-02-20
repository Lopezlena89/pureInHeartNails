import { Image } from "@nextui-org/react"
import { NavLink } from "react-router-dom"


export const Navbar = ({path}:{path:string}) => {
    
  return (
    <>
        <div className="z-10 w-full h-28  flex justify-between fixed bg-white">
            <div className="flex justify-center items-center ml-5 md:ml-20">
                <NavLink to="/">
                    <Image
                        src="/logo.png"
                        alt="Pure in Heart Logo"
                        width={80}
                        height={80}
                    />
                </NavLink>
                <div className="flex flex-col justify-center items-start ml-5">
                    <h1 className="text-sm font-light sm:text-2xl">PURE IN HEART</h1>
                    <p className="font-thin text-sm">Nail Boutique</p>
                </div>
            </div>
            <nav className="w-1/2 flex justify-between items-center list-none mr-5 font-light text-[10px] md:text-sm text-black md:w-1/3 md:mr-20">
                <li className={`hover:text-gray-400 duration-500 ${path === '/' ? 'text-gray-400' :'' } mx-1`}>
                    <NavLink to="/" >Home</NavLink> 
                </li>
                <li className={`hover:text-gray-400 duration-500 ${path === '/services' ? 'text-gray-400' :'' }`}>
                    <NavLink to="/services" >Services</NavLink> 
                </li>
                 <li className={`hover:text-gray-400 duration-500 ${path === '/location' ? 'text-gray-400' :'' }`}>
                    <NavLink to="/location" >Locations</NavLink>     
                </li>
                 <li className={`hover:text-gray-400 duration-500 ${path === '/about' ? 'text-gray-400' :'' }`}>
                    <NavLink to="/about" >About</NavLink>
                </li>
            </nav>
        </div>
    </>
  )
}
