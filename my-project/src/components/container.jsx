// Carousel.js
import React, { useState } from 'react';




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
  "By creating innovative and bespoke PPC campaigns that drive conversions and transform businesses digitally, we guarantee increased revenue for you."

    },
    {
      img: "/assets/email-marketing.png",
      heading: "EM",
      para: "Email Marketing",
      paraTwo: "We craft direct email marketing campaigns that inform, engage, and retain customers. " +
      "Our innovative strategy to target customers through email marketing focuses on getting positive responses from them.\n\n" +
      "Our email marketers rely on forming a direct and transactional relationship with customers through engaging emails."
    
    },
    {
      img: "assets/online-reputation.png",
      heading: "ASO",
      para: "App Store Optimization",
      paraTwo: "Stand apart from your competitors with result-driven app store optimization strategies. " +
      "We provide competent ASO services that ensure your app has a secure spot at the top of the Play Store and receives sufficient downloads.\n\n" +
      "With our strategic efforts to optimize your app, we attract traffic to your application that has the potential for conversions."
    
    },
    {
      img: "assets/search-engine.png",
      heading: "SEO",
      para: "Search Engine Optimization",
      paraTwo: "Do you want to have a reliable and stable relationship with your audience? " +
  "It is possible when you harness the power of social media marketing. " +
  "With highly engaging platforms such as Facebook, TikTok, Instagram, and " +
  "Snapchat, we craft narratives that speak to the audience. " +
  "We possess the talent to convert your audience into profitable customers."

    },
    {
      img: "assets/social-media.png",
      heading: "SMM",
      para: "Social Media Marketing",
      paraTwo: "Do you want to have a reliable and stable relationship with your audience? " +
  "It is possible when you harness the power of social media marketing. " +
  "With highly engaging platforms such as Facebook, TikTok, Instagram, and Snapchat, we craft narratives that speak to the audience.\n\n" +
  "We possess the talent to convert your audience into profitable customers. " +
  "Grow your online community by creating impactful experiences that stay longer with your audience."

    },
  ];

  const changeText = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex  items-center">
      <div className="overflow-hidden w-[50rem] mt-[4rem]">
        <div className="flex">
          {carouselItems.map((item, index) => (
            <div key={index} className={`w-[40rem] h-[40rem] text-center flex flex-col items-center justify-center cursor-pointer transition-transform duration-500 ease-in-out transform ${index === currentIndex ? 'scale-110' : 'scale-100'}`} onClick={() => changeText(index)}>
              <img src={item.img} alt={item.para} className="max-w-full max-h-full" />
              <div>
                <h3>{item.heading}</h3>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-center w-[40rem]">
        {carouselItems[currentIndex].paraTwo}
      </div>
    </div>
  );
};

export default  Container 
;
