import { useLocation } from "react-router-dom";
import { Footer } from "./Footer"
import { Navbar } from "./ui/Navbar"

export const AboutPage = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full">
    <Navbar path={location.pathname}/>
    <div className="w-full h-[50px]">

    </div>
    <div className="w-full h-[1400px] bg-gray-100 flex flex-col md:flex-row  md:h-[800px]">
        <div className="w-full h-full flex justify-center items-start md:w-1/2">
          <div className="w-2/3  mt-20 flex flex-col font-thin text-gray-600">
              <h2 className="h-20 text-4xl">ABOUT US</h2>
              <p className="h-36 mt-5">A lot of these new "hype" up and coming nail salons claim to revolutionize the nail 
                industry with new claimed procedures, fancy products, and a new culture that is 
                supposedly better than what used to be in the past.</p>
              <p className="mt-5">We are not trying to be any of those things.</p>
              <p className="mt-5">As an experienced salon operator for 8+ years in the DMV area, our core focus is this: </p>
              <p className="mt-5">To provide the <span className="font-semibold">highest quality </span>
              services and experience while keeping the cost affordable 
              and easy to reach for everyone.</p>
              <p className="mt-5">We learned that no matter how much buzzwords you try to put into a nail salon, if you 
                can't back it up with a great end product that lasts, it is useless.</p>
              <p className="mt-5">So, with all this in mind, we are constantly striving to create an experience that you, 
                the client, will be extremely happy with. That is who we are at Pure in Heart.</p>
          </div>
        </div>
        <div className="w-full h-full bg-[url('/nails-picture.png')] bg-cover md:w-1/2">

        </div>
    </div>
    <Footer/>
</div>
  )
}
