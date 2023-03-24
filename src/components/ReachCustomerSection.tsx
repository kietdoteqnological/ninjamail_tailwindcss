import React from "react";
import picture from "@src/src/assets/desktop/reachC.png";
import Image from "next/image";

const ReachCustomerSection: React.FC = () => {
  return (
    <section className="w-full px-[8px] pt-[42px] md:pt-[210px] xl:pt-[323px] z-10">
      <div className="relative flex justify-center">
        <div className="absolute text-white">
          <h1
            className="font-Montserrat text-[22px] leading-[29px] font-black md:leading-[51px]
                       px-[31px] pt-[48.44px] md:pl-[19px] md:pt-[106.44px]
                       xl:px-[145px] xl:pt-[163px]
                       md:text-[38px] xl:text-6xl
                      "
          >
            Reach More Customers
          </h1>
          <div
            className="w-full flex justify-center items-center font-black tracking-[0.3px]
                      pt-[20.56px] md:pt-[41.56px] xl:pt-[61px]
                      md:tracking-[0.65px] xl:tracking-[1.05px]"
          >
            <button
              className="text-btnBgColor bg-white text-[6px] px-3 py-[6px] w-[65px] h-[21px]
              md:text-[13px] md:leading-[15px] md:w-[132px] md:h-[42px] xl:w-[200px] xl:h-[65px]
              md:px-6 md:py-3 xl:px-8 xl:py-[19px] xl:text-xl"
            >
              LEARN HOW
            </button>
          </div>
        </div>
        <Image
          src={picture}
          alt="video"
          className="w-[304px] h-[171px] md:w-[616px] md:h-[347px] lg:w-[944px] lg:h-[531px]"
        />
      </div>
    </section>
  );
};

export default ReachCustomerSection;
