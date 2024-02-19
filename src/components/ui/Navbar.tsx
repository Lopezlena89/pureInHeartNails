import { Image } from "@nextui-org/react"
import { NavLink } from "react-router-dom"


export const Navbar = ({path}:{path:string}) => {
    
  return (
    <>
        <div className="z-10 w-full h-28  flex justify-between fixed bg-white">
            <div className="flex justify-center items-center ml-20">
                <Image
                    src="/logo.png"
                    alt="Pure in Heart Logo"
                    width={80}
                    height={80}
                />
                <div className="flex flex-col justify-center items-start ml-5">
                    <h1 className="text-2xl font-light">PURE IN HEART</h1>
                    <p className="font-thin">Nail Boutique</p>
                </div>
            </div>
            <nav className="w-80 flex justify-between items-center list-none mr-20 font-light text-sm text-black">
                <li className={`hover:text-gray-400 duration-500 ${path === '/' ? 'text-gray-400' :'' }`}>
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
