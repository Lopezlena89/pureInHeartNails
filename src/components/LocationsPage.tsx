import { useLocation } from "react-router-dom";
import { Navbar } from "./ui/Navbar"
import { Footer } from './Footer';


export const LocationsPage = () => {
  const location = useLocation();


  return (
    <div className="w-full h-full">
        <Navbar path={location.pathname}/>
        <div className="w-full h-[800px] bg-gray-100 flex flex-col justify-around items-center">
            <div className="w-full h-[200px] flex flex-col justify-center items-center mt-20">
                <h2 className="font-thin text-gray-600 text-5xl mt-20">OUR LOCATIONS</h2>
                <p className="font-thin text-gray-600 mt-10">Washington DC</p>
            </div>
            <div className="w-full h-[600px] flex justify-center">
              <div className="w-1/2 full flex flex-col justify-center items-center">
                  <div className="w-[300px] h-[300px] rounded-full bg-[url('/store.png')] bg-cover"/>
                  <h4 className="text-gray-500 mt-10 font-thin text-4xl">SHAW</h4>
              </div>
              <div className="w-1/2 full flex flex-col justify-center items-center">
                  <div className="w-[300px] h-[300px] rounded-full bg-[url('/Pedicure.png')] bg-cover"/>
                  <h4 className="text-gray-500 mt-10 font-thin text-4xl">BERKELEY / PALISADES</h4>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
