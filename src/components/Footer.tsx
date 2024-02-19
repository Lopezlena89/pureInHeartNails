import { FaFacebookF,FaInstagram } from "react-icons/fa6"


export const Footer = () => {
  return (
    <>
        <div className="w-full h-[200px] flex flex-col justify-end items-center ">
                <div className="w-14 h-10 flex justify-around " >
                    <FaFacebookF size={15} />
                    <FaInstagram size={15} />
                </div>
                <div className="w-full h-10 bg-black text-white flex justify-center items-center
                 font-thin text-sm">
                    <p>© { new Date().getFullYear() } by Pure in Heart LLC</p>
                </div>
        </div>
    </>
  )
}
