
import { useLocation } from "react-router-dom";
import { Navbar } from "./ui/Navbar"
import { Button, Image, Link } from "@nextui-org/react";
import { Footer } from "./Footer";


export const HomePage = () => {
    const location = useLocation();
  return (
    <>
        <div className="size-full flex flex-col overflow-auto">
            <Navbar path={location.pathname}/>
            <div className="w-full h-[850px] bg-[url('/principal-image.png')] bg-right-top bg-cover bg-no-repeat">
                <div className="w-1/2 h-full  bg-white/80 flex flex-col justify-center items-center">
                    <div className="w-9/12 h-1/2 flex flex-col justify-around items-center">
                        <div className="flex flex-col justify-center items-center text-gray-500 text-7xl font-thin">
                            <p>WELCOME</p>
                            <p>TO PURE IN</p>
                            <p>HEART</p>
                            
                        </div>
                        <div>
                            <p className="text-gray-500">Transforming the nail experience one ❤ at a time</p>
                        </div>
                        <div className="w-full flex justify-center">
                            <Button
                                href="/services"
                                as={Link}
                                variant="solid"
                                className="bg-red-300 text-white mr-5 rounded-2xl"
                                >
                                Services
                            </Button>
                            <Button
                                href="/about"
                                as={Link}
                                variant="solid"
                                className="bg-red-300 text-white ml-5 rounded-2xl"
                                >
                                About Us
                            </Button>
                        </div>
                    </div>
                    
                </div>
                 
            </div>
            <div
                className="w-full h-96 bg-[url('/hand-picture.png')] bg-center bg-cover bg-no-repeat
                flex justify-center items-center"
                >
                <div className="w-full h-72 flex justify-around ">
                    <div className="texto-subtittle w-4/12 h-full  flex flex-col justify-center items-center font-thin text-white text-5xl">
                        <p>NATURES PURITY</p>
                        <p>AT YOUR</p>
                        <p>FINGERTIPS</p>
                    </div>
                    <div className="mt-10 texto-subtittle w-4/12 h-full flex flex-col justify-center items-center  font-thin text-white text-5xl">
                        <p>Non-toxic</p>
                        <p>Natural</p>
                        <p>Eco-friendly</p>
                        <Button
                            href="/about"
                            as={Link}
                            variant="solid"
                            className="bg-lime-200 text-black ml-5 rounded-2xl mt-5"
                            >
                            More Info
                        </Button>
                    </div>
                </div>
            </div> 
            <div className="w-full h-[800px] flex flex-col justify-start items-center">
                <div className="w-full h-40 flex justify-center items-center mt-10">
                    <h2 className="font-subtitle">Our Services</h2>
                </div>
                <div className="w-10/12 flex justify-center mt-10 ">   
                    <div className="w-1/3 flex flex-col p-4">
                        <div className=" h-32 flex flex-col items-center">
                            <p className="font-subtitle">1. In a Heartbeat</p>
                            <p className="text-blue-300">Express Service</p>
                        </div>
                        <div className="h-24 font-thin">
                            <p>Designed for the professional on the go, the in a heartbeat
                                service delivers quality results at an expedited pace.</p>
                        </div>
                        <div className="h-32 flex flex-col font-thin items-center">
                            <p className="self-start">Includes:</p>
                            <p>Hot towel wrap</p>
                            <p>Nail shaping and cuticle care</p>
                            <p>Moisturizing lotion</p>
                            <p>Polish of your choice</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col p-4">
                        <div className="h-32 flex flex-col items-center">
                            <p className="font-subtitle">2. Pure Heart</p>
                            <p className="text-blue-300">Standard Service</p>
                        </div>
                        <div className="h-24 font-thin">
                            <p>Our signature and most popular service! The pure in heart service 
                                includes our four-step spa care process to give you the additional 
                                healing you need.</p>
                        </div>
                        <div className="h-32 flex flex-col font-thin items-center">
                            <p className="self-start">Includes everything in express service, plus:</p>
                            <p>Exfoliating sugar scrub</p>
                            <p>Ultra-hydrating massage butter</p>
                            <p>Refreshing massage (4-5 minutes)</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col p-4">
                        <div className="h-32 flex flex-col items-center">
                            <p className="font-subtitle">3. Heart to Heart</p>
                            <p className="text-blue-300">Luxury Service</p>
                        </div>
                        <div className="h-24 font-thin">
                            <p>Like a heart to heart conversation over wine, our intimate, honest, and
                                comprehensive service is sure to be heartwarming.</p>
                        </div>
                        <div className=" h-32 flex flex-col font-thin items-center">
                            <p className="self-start">Includes everything in standard service, plus:</p>
                            <p>Soothing hot stone massage</p>
                            <p>Collagen glove treatment (Mani)</p>
                            <p>Refreshing extended massage (6-8 minutes)</p>
                            <p>Paraffin treatment (Pedi)</p>
                        </div>
                    </div>
                   
                </div>
                <div className="h-96 flex justify-center items-center">
                    <Button
                        href="/about"
                        as={Link}
                        variant="solid"
                        className="bg-lime-200 text-black ml-5 rounded-2xl mt-5"
                        >
                        More Info
                    </Button>
                </div>
            </div>
            <div className="w-full h-[800px] bg-[url('/heart.png')] flex flex-col justify-start items-center">
                <div className="w-full h-72 flex justify-center items-center mt-10 ">
                    <Image
                        src="/into-hearts.png"
                        alt="hands heart"
                        
                        className="w-[250px] h-[250px] rounded-full"
                    />
                </div>
                <div className="w-full h-40 flex justify-center items-center text-gray-500">
                    <h3 className="font-thin text-5xl">THE PURE IN HEART PROMISE</h3>
                </div>
                <div className="w-full h-20 flex flex-col justify-start items-center font-light  text-gray-500">
                    <p>At Pure in Heart, we abide by a strict set of standards different 
                        from other salons in order to ensure the safest,</p>
                    <p>smoothest, and most comfortable experience for our clients. We call 
                        these standards the Pure in Heart Promise.</p>
                </div>
                <div className="w-full h-40 flex flex-col justify-center items-center font-light  text-gray-500">
                    <p>We always promise to:</p>
                    <p>Deliver consistent and best customer service</p>
                    <p>Use products of the highest quality</p>
                    <p>Maintain the highest standards for safety and cleanliness</p>
                    <p>Resolve and unsatisfactory experience immediately</p>
                </div>
                <div className="w-full h-28 flex justify-center">
                    <Button
                        href="/about"
                        as={Link}
                        variant="solid"
                        className="bg-pink-500 ml-5 rounded-2xl mt-5 text-white"
                        >
                        About us
                    </Button>
                </div>
            </div>
            <div className="w-full h-[500px] flex flex-col justify-end items-center">
                <Footer/>
            </div>
        </div>
    </>
  )
}
