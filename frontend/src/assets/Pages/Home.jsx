import React from 'react';
import Boxes from '../Boxes';
import { About } from '../About';
import Footer from '../Footer';
import { Topdest } from '../Topdest';
import NavigationBar from '../NavigationBar';
import ImageCarousel from '../ImageCarousel';
import MapComponent from '../MapComponent';
import BestRoute from '../BestRoutes';
import { NavLink } from 'react-router-dom';


const images = [
  'https://i.pinimg.com/736x/52/a5/30/52a5305b4667f076e5bb48042afe4c36.jpg',
  'https://i.pinimg.com/736x/19/57/cd/1957cd89f59c5089c46110afe72e1e32.jpg',
  'https://i.pinimg.com/736x/ca/71/4d/ca714dfe2bfb5bbf81f273096b31ca2b.jpg',
  'https://i.pinimg.com/564x/9c/17/af/9c17aff3f06eace9c6aa60d207f928ac.jpg',
  'https://i.pinimg.com/736x/28/e8/e5/28e8e5fad7cd7d9c9348f97ab3ecdb45.jpg',
  'https://i.pinimg.com/736x/bc/fa/d2/bcfad256e828cef6ad46fb93adb35a0a.jpg',
];

const Home = () => {
  return (
    <div className='h-screen w-full animate-slowFadeIn3' >
      <div className='absolute h-4/5 w-full'>
      <div className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    id="fullscreen-video"
    autoPlay
    muted
    loop
    className="absolute inset-0 object-cover w-full h-full -z-10"
  >
    <source
      src="https://www.pexels.com/download/video/17791400/"
      type="video/mp4"
    />
  </video>

  {/* Centered Text Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-10 text-center" data-scroll data-scroll-speed="0.2" >
    <div className="dancing-script mix-blend-luminosity text-lime-950 text-8xl font-bold animate-slowFadeIn">
      DevBhoomi Himachal
    </div>
    <div className="demon mix-blend-color-burn text-lime-900 text-5xl font-normal animate-slowFadeIn">
      Land of God and Goddess
    </div>
  </div>
</div>

        <div
          className="relative p-5 opacity-90"
          style={{
            width: '100%',
            height: '180%',
            background: 'linear-gradient(180deg, #0A0D0A 10%, #C9D1DB 100%)',
          }}
        >
          <div className='w-full relative border-8 border-zinc-400 rounded-[44px] pt-10 h-11/12'   data-scroll-container>
            <div className='h-20 w-full mt-5 bg-opacity-0 flex justify-evenly'>
              <div className="text-slate-100 font-['Raleway'] text-5xl underline underline-offset-8 decoration-[#915700] ">
                Land Of Gods
              </div>
            </div>
            <Boxes />
          </div>
        </div>
        <div className='relative w-full h-[750px] '>
          <video
            id="fullscreen-video"
            autoPlay
            muted
            loop
            className="inset-0 object-cover w-full h-full"
          >
            <source
              src="https://www.pexels.com/download/video/31657899/"
              type="video/mp4"
            />
          </video>
          <div className="absolute top-2 w-full flex items-center justify-center ">
            <div className="mt-5 text-white opacity-60 font-['Raleway'] text-5xl underline underline-offset-8 decoration-[#915700]" >
              Beautiful state
            </div>
          </div>
          <div className='absolute top-14 w-screen h-96 flex mt-14' data-scroll data-scroll-speed="0.2">
            <div className='relative w-3/5 h-96 mr-10'>
              <div className="custom-div h-[570px] w-7/11 border-2 border-gray-100 rounded-tr-3xl rounded-br-3xl">
                <About />
              </div>
            </div>
            <div className='relative h-[570px]' >
              <img
                className="h-[570px] w-[500px]  rounded-[35px] shadow border border-black hover:scale-110 ease-in duration-300"
                src="https://i.pinimg.com/736x/bf/a4/59/bfa459039431dd11ba43357b67dc1226.jpg"
                alt="Gue Village"
              />
            </div>
          </div>
          <div className="backgroundv relative overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover -z-10"
  >
    <source
      src="https://www.pexels.com/download/video/11054019/"
      type="video/mp4"
    />
  </video>

  <div className="relative z-10 w-full h-10 flex items-center justify-center">
    <div className="text-white opacity-80 font-['Raleway'] text-5xl mt-7 underline tracking-tight underline-offset-8 decoration-[#915700]">
      Top Destination
    </div>
  </div>

  <div className="relative z-10 flex" data-scroll data-scroll-speed="0.2">
    <div className="Carousel-image h-[649px] w-[570px] ml-5 mt-14 hover:scale-110 ease-in duration-300">
      <ImageCarousel images={images} />
    </div>

    <div className="relative h-[639px] w-3/5 border-2 ml-10 border-gray-100 rounded-tl-3xl rounded-bl-3xl mt-14">
      <Topdest />
    </div>
  </div>

</div>
          <div className="relative w-screen h-[1429px] bg-gradient-to-b from-[#252525] to-[#8b8b8b]">
            <div className="flex pt-7 justify-center text-white text-4xl font-['Raleway'] font-normal ">
           
            </div>



            <div className="w-[1500px] m-5 h-[555px] bg-opacity-30 bg-[#d9d9d9] rounded-[65px] flex" >
              <div className='h-full w-full p-5'><MapComponent /></div>
              <div className='h-full w-full '>
              <div className="text-white text-[40px] font-normal mt-5 font-['Raleway']">Discover Your Perfect Getaway! 🌿</div>
              <div className="w-[691px] h-[461px] text-white text-3xl font-normal mt-9 font-['Raleway']">With our interactive map, exploring the best places in Himachal has never been easier. Just let your curiosity guide you as you browse through the top destinations, hidden gems, and breathtaking views that this magical region has to offer. Whether you’re looking for serene mountain retreats, thrilling adventure spots, or cultural hubs, the perfect destination is just a click away.
                 Let your imagination take you there, and we’ll show you the way!</div>
              </div>
            </div>
            <div className="flex pt-7 mt-5 justify-center text-white text-4xl font-['Raleway'] font-normal ">
              We will find the best Route for your destination !!! 😀
            </div>
            <BestRoute />


            
            <div className="flex pt-7  justify-center text-white text-4xl font-['Raleway'] font-normal hover:text-rose-400 hover:scale-110 ease-in duration-200 hover:underline ">
              <NavLink to="/AI" >Try our best AI Trip adviser 🧠</NavLink>
            </div>

          </div>

          <Footer />
        </div>


      </div>
    </div>
  );
};

export default Home;
