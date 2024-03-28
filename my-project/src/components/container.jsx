
import React, { useState, useEffect } from "react";
import Image from "/assets/agency-bg.png"



const Container = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
   {
      img: "/assets/app-store.png",
      heading: "PPC",
      para: "Pay Per Click",
      paraTwo:
        "Our customer-centric and data-driven approach ensures that your business invites clicks that have the potential for conversion. " +
        "We have industry-specific expertise that can help you attract your audience and sell more.\n\n" +
        "By creating innovative and bespoke PPC campaigns that drive conversions and transform businesses digitally, we guarantee increased revenue for you.",
    },
    {
      img: "/assets/email-marketing.png",
      heading: "EM",
      para: "Email Marketing",
      paraTwo:
        "We craft direct email marketing campaigns that inform, engage, and retain customers. " +
        "Our innovative strategy to target customers through email marketing focuses on getting positive responses from them.\n\n" +
        "Our email marketers rely on forming a direct and transactional relationship with customers through engaging emails.",
    },
    {
      img: "assets/online-reputation.png",
      heading: "ASO",
      para: "App Store Optimization",
      paraTwo:
        "Stand apart from your competitors with result-driven app store optimization strategies. " +
        "We provide competent ASO services that ensure your app has a secure spot at the top of the Play Store and receives sufficient downloads.\n\n" +
        "With our strategic efforts to optimize your app, we attract traffic to your application that has the potential for conversions.",
    },
    {
      img: "assets/search-engine.png",
      heading: "SEO",
      para: "Search Engine Optimization",
      paraTwo:
        "Do you want to have a reliable and stable relationship with your audience? " +
        "It is possible when you harness the power of social media marketing. " +
        "With highly engaging platforms such as Facebook, TikTok, Instagram, and " +
        "Snapchat, we craft narratives that speak to the audience. " +
        "We possess the talent to convert your audience into profitable customers.",
    },
    {
      img: "assets/social-media.png",
      heading: "SMM",
      para: "Social Media Marketing",
      paraTwo:
        "Do you want to have a reliable and stable relationship with your audience? " +
        "It is possible when you harness the power of social media marketing. " +
        "With highly engaging platforms such as Facebook, TikTok, Instagram, and Snapchat, we craft narratives that speak to the audience.\n\n" +
        "We possess the talent to convert your audience into profitable customers. " +
        "Grow your online community by creating impactful experiences that stay longer with your audience.",
    },
  ];

  const changeText = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoSlide = () => {
      const nextIndex = (currentIndex + 1) % carouselItems.length;
      setCurrentIndex(nextIndex);
      setTimeout(autoSlide, 5000); 
    };
  
    const timeoutId = setTimeout(autoSlide, 3000); 
  
    return () => {
      
      clearTimeout(timeoutId);
    };
  }, [currentIndex, carouselItems.length]);
  

  return (
    <div className="bg-black" >
    <div className="flex justify-center items-center">

      <div className="flex justify-around items-center m-auto tab:flex-col">

        <div className="overflow-hidden w-[70rem] mt-[4rem]">
          <div className="flex justify-center">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`h-[20rem] border-2 border-solid rounded-xl bg-slate-50 text-center m-4 flex flex-col items-center justify-center cursor-pointer transition-transform duration-500 ease-in-out transform ${
                  index === currentIndex ? "scale-110" : "scale-100"
                }`}
                onClick={() => changeText(index)}
              >
                <img
                  src={item.img}
                  alt={item.para}
                  className="max-w-full max-h-full"
                />
                <div>
                  <h3>{item.heading}</h3>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col m-auto justify-between text-center w-[40rem] h-[40rem] p-4 text-white magrin" style={{backgroundColor:'rgba(56, 56, 56, .2)'}}>
          <p>
            We use every digital platform to ensure that your audience is
            accurately targeted. Our personalized and creative digital marketing
            strategies can promote your brand and establish a strong place for
            your business in the market.
          </p>
            <p className="mt-10">
              Our team of digital marketing experts has a proven track record of
              helping brands thrive in the digital landscape. We curate and
              implement customer-centric digital marketing campaigns to provide
              our clients with extensive market reach and drive more leads.
            </p>
            <div className="mt-[10rem]">
              {carouselItems[currentIndex].paraTwo}
            </div>
        </div>  
      </div>
    </div>
    </div>
  );
};

export default Container;
