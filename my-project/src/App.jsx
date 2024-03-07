import React from 'react';
import data from './components/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CAROUSEL from './components/container'




 const App = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div>
    <div className='flex text-center justify-center gap-4'>
      <Carousel responsive={responsive} className='w-[40rem]'>
      {data?.map((item,index)=>(
      <div className='flex flex-col border-2 border-red-400'>
      <img src={item?.img} />
      <h1>{item?.heading}</h1>
      <p>({item?.para})</p>
     
      </div>
    ))}
     </Carousel></div>
     <CAROUSEL />
     
    </div>
  )
}
export default App 
