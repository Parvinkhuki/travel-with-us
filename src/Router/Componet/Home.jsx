import React from 'react';
import banner from '../../assets/images/img/banner1.JPG'
import card from '../../assets/images/img/card1.PNG'
import card1 from '../../assets/images/img/card2.PNG'
import card2 from '../../assets/images/img/card3.PNG'
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
 <div className='grid lg:grid-cols-2 gap-12 text-left'>
    <div className='bg-zinc-800 w-full text-white flex flex-col justify-center p-10 md:pl-[136px] md:pr-[100px] items-center min-h-screen font-Mono'>
        <h1 className='text-center text-white w-full font-bold  text-5xl my-4 '>COX'S BAZAR</h1> 
        <p>
Reviewed January 29, 2019
a wonderful reserve that doesn't disappoint
you will probably not spot a Bengal Tiger although well over a hundred live here, however, we saw quite a few older and fresher paw prints in the mangrove mud. That alone is pretty exciting. Clearly there are many Spotted Deer, monkies, wild boars, including a wide variety of birds from King Fishers to Wild Bellied Sea Eagles, Egrets, etc. etc.
 (they're blind and have a long snout) or the Irrawaddy River Dolphin. Spotting them isn't easy. Getting a photo falls into the good luck category. But being out on the water is wonderful...</p>
        <button className='btn btn-primary bg-pro w-3/4 text-white my-5'>Book now  </button>
    </div> 
    <Marquee>
      <div className='pt-32 gap-7  grid grid-cols-3 '>

      <div className="card w-[270px] ">
  <figure><img src={card} alt="Shoes" /></figure>
  <p className='text-white relative -top-9 left-3'>sundorban</p>
    </div>
  
    <div className="card  w-[270px] ">
  <figure><img src={card1} alt="Shoes" /></figure>
  <p className='text-white relative -top-9 left-3'>sajek</p>
    </div>
    
    <div className="card  w-[270px]">
  <figure><img src={card2} alt="Shoes" /></figure>
  <p className='text-white relative -top-9 left-3'>Bandarban</p>
    </div>
    
  </div>
  </Marquee>
</div>

      </div>
 </div>

        
    );
};

export default Home;