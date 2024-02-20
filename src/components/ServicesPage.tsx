import { useLocation } from "react-router-dom";
import { Navbar } from "./ui/Navbar"
import { Footer } from "./Footer";


export const ServicesPage = () => {
  const location = useLocation();

  return (
   <>
      <div className="w-full h-full">
        <Navbar path={location.pathname}/>
        <div className="w-full h-[150px]">

        </div>
        <div className="w-full  bg-[url('/background.png')] flex flex-col justify-start items-center ">
            <div className="w-full  h-[200px] flex flex-col justify-center items-center md:w-[500px]">
              <h3 className="font-subtitle text-center">THE PURE IN HEART MENU</h3>
              <h4 className="mt-5 text-cyan-500">Manicure | Pedicure</h4>
            </div>
            <div className="w-full  flex flex-col justify-start p-5 md:justify-center md:flex-row md:h-[800px] lg:h-[600px]"> 
                    <div className=" w-full flex flex-col items-center  p-4 md:w-1/3 md:mt-0">
                        <div className="w-full flex flex-col items-center">
                            <p className="font-subtitle">1. In a Heartbeat</p>
                            <p className="text-cyan-500 mt-5">Express</p>
                        </div>
                        <div className="w-full font-thin">
                            <p className="mt-5">Designed for the professional on the go, the in a heartbeat
                                service delivers quality results at an expedited pace.</p>
                        </div>
                        <div className="w-full flex flex-col font-thin justify-center items-center">
                            <p className="self-start mt-5">Includes:</p>
                            <p className="mt-5">Hot towel wrap</p>
                            <p>Nail shaping and cuticle care</p>
                            <p>Moisturizing lotion</p>
                            <p>Polish of your choice</p>
                        </div>
                        <div  className=" w-full mt-5 flex flex-col justify-center items-center text-red-600 px-10">
                            <div className="w-full flex justify-between">
                              <p>Pedicure</p>
                              <p>$35</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p>Pedicure w/ Gel Polish</p>
                              <p>$53</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col items-center  p-4 md:w-1/3 md:mt-0">
                        <div className="  flex flex-col items-center">
                            <p className="font-subtitle">2. Pure Heart</p>
                            <p className="text-cyan-500 mt-5">Standard</p>
                        </div>
                        <div className="font-thin">
                            <p className="mt-5">Our signature and most popular service! The pure in heart service 
                              includes our <span className="text-red-600">4-step</span> spa care process to give you the additional healing 
                              you need.</p>
                        </div>
                        <div className=" w-full flex flex-col font-thin justify-center items-center">
                            <p className="self-start mt-5">Includes everything in express service, plus:</p>
                            <p className="mt-5">Exfoliating sugar scrub</p>
                            <p>Ultra-hydrating massage butter</p>
                            <p>Refreshing massage (4-5 minutes)</p>
                        </div>
                        <div  className="w-full mt-10  flex flex-col justify-center items-center text-red-600 px-10">
                            <div className="w-full flex justify-between ">
                              <p className="ml-5">Manicure</p>
                              <p className="mr-5">$25</p>
                            </div>
                            <div className="w-full flex justify-between ">
                              <p className="ml-5">Manicure w/ Gel Polish</p>
                              <p className="mr-5">$43</p>
                            </div>
                            <div className="w-full flex justify-between ">
                              <p className="ml-5">Pedicure</p>
                              <p className="mr-5">$45</p>
                            </div>
                            <div className="w-full flex justify-between ">
                              <p className="ml-5">Pedicure w/ Gel Polish</p>
                              <p className="mr-5">$63</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col items-center  p-4 md:w-1/3 md:mt-0">
                        <div className=" flex flex-col items-center">
                            <p className="font-subtitle">3. Heart to Heart</p>
                            <p className="text-cyan-500 mt-5">Spa</p>
                        </div>
                        <div className=" font-thin">
                            <p className="mt-5">Treat yourself with our comprehensive service with our 
                              <span className="text-red-600">6-step</span> spa procedure 
                              from ibi®.</p>
                        </div>
                        <div className=" w-full flex flex-col font-thin justify-center items-center">
                            <p className="self-start mt-5">Includes everything in standard service, plus:</p>
                            <p className="mt-5">Soothing hot stone massage</p>
                            <p>Advanced Collagen glove treatment (Mani)</p>
                            <p>Refreshing extended massage (6-8 minutes)</p>
                            <p>Paraffin treatment (Pedi)</p>
                        </div>
                        <div  className=" w-full  flex flex-col justify-center items-center text-red-600 mt-5 px-10">
                        <div className="w-full flex justify-between">
                              <p className="ml-5">Manicure</p>
                              <p className="mr-5">$38</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p className="ml-5">Manicure w/ Gel Polish</p>
                              <p className="mr-5">$56</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p className="ml-5">Pedicure</p>
                              <p className="mr-5">$60</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p className="ml-5">Pedicure w/ Gel Polish</p>
                              <p className="mr-5">$78</p>
                            </div>
                        </div>
                    </div>
                  
            </div>
            <div className="w-full flex flex-col justify-start p-5 md:justify-center md:flex-row md:h-[800px] lg:h-[600px]"> 
                    <div className=" w-full flex flex-col items-center  p-4 md:w-1/3 md:mt-0">
                        <div className=" flex flex-col items-center">
                            <p className="font-subtitle">4. A HEART OF GOLD</p>
                            <p className="text-cyan-500 mt-5">Lux</p>
                        </div>
                        <div className="font-thin mt-10">
                            <p>The pinnacle of luxury and relaxation. Pamper yourself with our 
                              top-of-the-line care with our <span className="text-red-600">ultimate 6-step </span>
                              pedicure service from Voesh®.</p>
                        </div>
                        <div className=" w-full flex flex-col font-thin justify-center items-center">
                            <p className="self-start mt-5">Includes everything in luxury service, plus:</p>
                            <p className="mt-5">Detoxifying mud mask</p>
                            <p>Callus removal treatment</p>
                            <p>Refreshing full massage (10-12 minutes)</p>
                        </div>
                        <div  className=" w-full mt-5 px-10 flex flex-col justify-center items-center text-red-600">
                            <div className="w-full flex justify-between">
                              <p className="ml-5">Pedicure</p>
                              <p className="mr-5">$78</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p className="ml-5">Pedicure w/ Gel Polish</p>
                              <p className="mr-5">$96</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col items-center  p-4 md:w-1/3 md:mt-0">
                        <div className="  flex flex-col items-center">
                            <p className="font-subtitle">FOREVER IN MY HEART</p>
                            <p className="text-cyan-500 mt-5">Long-lasting Gel Alternative</p>
                        </div>
                        <div className=" font-thin mt-5">
                            <p>Want your nails to last longer but don't want to do gel? Try our forever 
                              in my heart! With all natural vegan ingredients, this special non-toxic 
                              polish system lasts up to 14 days.</p>
                        </div>
                        <div className=" w-full flex flex-col font-thin justify-center items-center">
                            <p className="self-start mt-5">Includes everything in standard service, plus:</p>
                            <p className="mt-5">Fully organic, cruelty-free polish system</p>
                            <p>Guaranteed to last longer than regular polish</p>
                            <p>Quick-dry, no UV curing needed</p>
                        </div>
                        <div  className=" w-full  flex flex-col justify-center items-center text-red-600 mt-5 px-10">
                            <div className="w-full flex justify-between ">
                              <p >Manicure</p>
                              <p >$40</p>
                            </div>
                            <div className="w-full flex justify-between ">
                              <p >Pedicure</p>
                              <p >$63</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className=" w-full flex flex-col items-center  p-4 md:w-1/3 md:mt-0">
                        <div className=" flex flex-col items-center">
                            <p className="font-subtitle">DIP Your Heart out</p>
                            <p className="text-cyan-500 mt-5">Dip Powder</p>
                        </div>
                        <div className=" font-thin mt-5">
                            <p>Since we at Pureinheart don't do acrylic services, customers have requested
                               that we have the dip powder to complement gel. Trust us for the safe and 
                               hygienic dip experience!</p>
                        </div>
                        <div className=" w-full flex flex-col font-thin justify-center items-center">
                            <p className="self-start mt-5">Includes everything in standard service</p>
                           
                        </div>
                        <div  className=" w-full  flex flex-col justify-center items-center text-red-600 mt-5 px-10">
                        <div className="w-full flex justify-between">
                              <p >Manicure</p>
                              <p >$55</p>
                            </div>
                        </div>
                    </div>
                  
            </div>
            <div className="w-full flex flex-col justify-start p-5 md:justify-center md:flex-row md:h-[800px] lg:h-[600px]"> 
                      <div className=" w-full flex flex-col items-center  p-4 md:w-1/3 md:mt-0">
                        <div className="flex flex-col items-center">
                            <p className="font-subtitle">Miniheart</p>
                            <p className="text-cyan-500 mt-5">Little Ones 10 and Under</p>
                        </div>
                        <div className="font-thin mt-5">
                            <p>Our mild service is specially designed for the little ones in your life!</p>
                        </div>
                        <div className=" w-full flex flex-col font-thin justify-center items-center">
                            <p className="self-start mt-5">Includes a modified version of our standard service </p>
                            
                        </div>
                        <div  className=" w-full  flex flex-col justify-center items-center text-red-600 mt-5 px-10">
                            <div className="w-full flex justify-between">
                              <p >Manicure</p>
                              <p >$15</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p >Pedicure</p>
                              <p >$30</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col items-center  p-4 md:w-1/3 md:mt-0">
                        <div className="flex flex-col items-center">
                            <p className="font-subtitle">Extra Hearts</p>
                            <p className="text-cyan-500">Other Services</p>
                        </div>
                        
                        <div  className="mt-10 w-full  flex flex-col justify-center items-center text-red-600">
                            <div className="w-full flex justify-between ">
                              <p >Massage Service (10min)</p>
                              <p >$18</p>
                            </div>
                            <div className="flex justify-center items-center mx-5">
                              <p className="text-[10px]">Includes sugar scrub, moisture mask,
                                collagen gloves, hot stone</p>
                            </div>
                            <div className="w-full flex justify-between ">
                              <p >Gel Polish Removal Only</p>
                              <p >$12 & Up</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className=" w-full flex flex-col items-center  p-4 md:w-1/3 md:mt-0">
                        <div className=" flex flex-col items-center">
                            <p className="font-subtitle">Add More Hearts</p>
                            <p className="text-cyan-500 mt-5">Add-on Services</p>
                        </div>
                        
                        <div  className=" w-full  flex flex-col justify-center items-center text-red-600 mt-5">
                            <div className="w-full flex justify-between">
                              <p >Nail Art (Per finger/toe)</p>
                              <p >$3 & Up</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p>French Add-on</p>
                              <p>$12</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p>Gel Polish Removal</p>
                              <p>$5</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p>Shiny Buff</p>
                              <p>$5</p>
                            </div>
                            <div className="w-full flex justify-between">
                              <p >Callus Removal</p>
                              <p >$15</p>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-col items-center mx-5">
                            <p className="text-cyan-500 h-10">Add Advanced Non-toxic Polishes</p>
                            <div className="w-full flex justify-between text-red-600">
                              <p>Vinylux by CND</p>
                              <p>$7</p>
                            </div>
                            <div className="w-full flex justify-between text-red-600">
                              <p >Olive and June </p>
                              <p >$10</p>
                            </div>
                        </div>
                    </div>
                  
            </div>
            

        </div>
        <Footer/>
      </div>
   </>
  )
}
