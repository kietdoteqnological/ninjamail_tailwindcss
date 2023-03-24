import Image from "next/image";
import React from "react";
import mainGirl from "@src/src/assets/desktop/girl.png";

const MainHeadingSection: React.FC = () => {
  return (
    <section>
      <div
        className="relative px-[9px] pt-[76px] flex flex-col gap-[98px]
                   md:pt-[133px] md:px-[28px] md:gap-[17px] 
                   lg:px-36 xl:px-44 xl:pt-[205px] xl:gap-[23px] "
      >
        <div className="flex flex-col relative pr-[18px] md:pl-[1px]">
          <h1
            className="font-Montserrat relative text-4xl font-black leading-[46px] z-10 
                         md:text-[38px] md:w-[315px] md:pt-[15px] xl:pt-[22px]
                         xl:text-[59px] xl:w-[55%] xl:leading-[71px]"
          >
            Create Stunning Email Campaigns
          </h1>

          <div
            className="w-[300px] absolute flex justify-center right-[2px] top-[51px]
                                 md:w-[445px] md:top-0 md:h-[250px]
                                 lg:w-[65%] xl:w-[680px] xl:h-[383px]"
          >
            <Image
              src={mainGirl}
              alt=""
              className="shadow-md w-full object-cover"
            ></Image>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 md:top-0 md:w-72 xl:w-[45%] md:gap-[25px] xl:gap-9">
          <p
            className="text-sm md:text-xs xl:text-[19px] w-[290px] h-[32px] leading-4 font-medium
                                xl:w-[446px] xl:h-[52px] xl:leading-[26px]"
          >
            Create and launch email campaigns that captivate your customers in
            just a few clicks.
          </p>
          <div
            className="flex gap-[14px] text-[13px] font-black 
                          md:gap-[29px] xl:gap-[45px] self-center md:self-start xl:text-[21px]"
          >
            <a
              href="#"
              className="bg-btnBgColor text-white flex h-10 w-[143px] leading-[15px] tracking-[0.65px] 
                           md:h-[42px] md:w-[131px] xl:w-[200px] xl:h-16 items-center justify-center"
            >
              TRY NOW
            </a>
            <a
              href="#"
              className="text-btnBgColor bg-white border-[3px] border-btnBgColor flex h-10 w-[143px] leading-[15px] tracking-[1.3px]
                          md:w-[131px] md:h-[42px] xl:w-[200px] xl:h-16 items-center justify-center xl:tracking-[2.1px]"
            >
              GET A DEMO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeadingSection;
