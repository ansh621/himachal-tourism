import React from 'react'
import Socials from '../Socials'
import Footer from '../Footer'


const HowToReach = () => {
  return (
    <>
      <div className='bg-[#F5FEFD] '>
        <div className="w-full h-[537px] animate-slowFadeIn4">
          <video
            id="fullscreen-video"
            autoPlay
            muted
            loop
            className="inset-0 object-cover w-full h-full -z-10 "
          >
            <source
              src="https://www.pexels.com/download/video/3563086/"
              type="video/mp4"
            />
          </video>
          <p className="dancing-script absolute bottom-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 animate-slowFadeIn text-white opacity-90 mix-blend-difference drop-shadow-2xl text-[75px] mix-blend-luminosity tracking-[7.68px] font-bold  text-center z-10">
            How to Reach
          </p>
        </div>
        <div className=" text-black underline underline-offset-4 text-5xl Raleway navtxt tracking-[3.84px] mt-10 ml-5 animate-slowFadeIn2" >How to Reach Himachal Pradesh</div>
        <div className="text-black underline text-[40px] font-normal font-['Raleway'] tracking-[3.20px] mt-20 ml-5" >By Train</div>
        <div className="mt-10 ml-5 w-[1367px] h-[300.04px]"><span className=" mt-10 ml-5text-black text-xl font-normal font-['Sans Serif Collection'] tracking-wider">In the north, on the border with Punjab, Pathankot is the major broad gauge train station that connect to Himachal. From Pathankot,
          a narrow gauge train to Jogindernagar connects up the entire Kangra valley in a joyful journey.
          <br />On the border with Haryana, Kalka is the major broad gauge train station that connect to Shimla, Himachal Pradesh.  The Kalka-Shimla train track is UNESCO World Heritage Site in itself.
          An engineering masterpiece of the British era, the journey passes through some spectacular landscapes.
          <br /><br /></span><a href="https://www.irctc.co.in/nget/train-search" className="mt-10 ml-5text-black text-xl font-normal font-['Sans Serif Collection'] underline tracking-wider">Kalka Shimla Rail Line<br />Pathankot – Joginder Nagar Railway Line<br />Una Himachal Railway Line</a>
        </div>
        <div   data-scroll data-scroll-speed="0.2">
          <img className="w-full h-[550px] object-cover object-bottom animate-slowFadeIn2" src="https://i.pinimg.com/1200x/a0/6d/d4/a06dd448c85e240a6c10902a8340a08a.jpg" />
        </div>
        <div className="text-black text-[40px] font-normal font-['Raleway'] tracking-[3.20px] mt-10 ml-5">By Bus</div>
        <div className=" mt-10 ml-5 w-[1367px] h-[250.11px]"><span className="text-black text-xl font-normal font-['Sans Serif Collection'] tracking-wider">Himachal Pradesh is easily accessible by road from Chandigarh, Kalka and Pathankot. Interstate bus services are available from Delhi, Chandigarh, Jaipur and other neighboring cities. Within Himachal, a good public transport service and taxi services serve reach all destinations in the state
          .<br />Online Bus Bookings :<br />
          <br /></span><a href="http://www.booking.hptdc.in/" className="text-black text-xl font-normal font-['Sans Serif Collection'] underline tracking-wider">Himachal Tourism Bus Bookings<br /></a><a href="https://online.hrtchp.com/oprs-web/guest/home.do?h=1 " className="text-black text-xl font-normal font-['Sans Serif Collection'] underline tracking-wider">Himachal Road Transport
            Corporation</a></div>

        <div   data-scroll data-scroll-fade data-scroll-speed="0.2" >
          <img className="w-full h-[575px] object-cover object-bottom animate-slowFadeIn2" src="https://i.pinimg.com/736x/ff/c5/de/ffc5defc3f2d0295f56ceecaf267a8b8.jpg" />
        </div>
        <div className="text-black text-[40px] font-normal font-['Raleway'] tracking-[3.20px] mt-10 ml-5">By Air</div>
        <div className="w-[1367px] h-[275px] mt-10 ml-5"><span className="text-black text-xl font-normal font-['Sans Serif Collection'] tracking-wider">The airports of Chandigarh and Pathankot on the borders 
          of Himachal and the smaller airports of Gaggal-Kangra,
           Bhuntar-Kullu and Jubbarhatti-Shimla provide air connectivity to the state.
           <br />The Pathankot and Gaggal-Kangra airport give easy access to Kangra, 
           Dharamshala, Chamba, Hamirpur and Una, the Bhuntar-Kullu airport to Mandi,
            Kullu-Manali and Lahaul-Spiti, 
            and the Chandigarh and Jubbarhatti – Shimla airport to Shimla,
             Solan, Bilaspur, Mandi and Kinnaur regions.<br /><br /></span><a href="https://www.aai.aero/en/airports/kullu" className="text-black text-xl font-normal font-['Sans Serif Collection'] underline tracking-wider">Bhuntar Airport, Manali<br /></a><a href="https://www.aai.aero/en/airports/kangra-gaggal"
              className="text-black text-xl font-normal font-['Sans Serif Collection'] 
              underline tracking-wider">Gaggal Airport, Kangra<br /></a><a href="https://www.aai.aero/en/airports/contact-us/shimla"
               className="text-black text-xl font-normal font-['Sans Serif Collection'] underline tracking-wider">Jubbarhatti Airport, Shimla</a></div>

<Footer/>



      </div>


    </>
  )
}

export default HowToReach
