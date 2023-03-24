import React from "react";

const GetStartedSection: React.FC = () => {
  return (
    <section className="pt-[58px] md:pt-[95px] xl:pt-[146px] z-10">
      <div
        className="w-full h-[290px] bg-btnBgColor 
                         md:h-[240px] xl:h-[366px]"
      >
        <div
          className="flex flex-col items-center pt-[43px] px-[31px] gap-[19px]
                        md:pt-[45px] md:px-[76px] md:gap-[13px]
                        xl:pt-[82px] xl:px-[248px] xl:gap-0"
        >
          <h2
            className="font-Montserrat font-black text-center text-white text-[42px] leading-[48px]
                                                              md:leading-[56px] 
                                                              xl:text-[60px] xl:leading-[124px]"
          >
            Get started today!
          </h2>
          <button
            className="text-btnBgColor bg-white font-black w-[131px] h-[42px] text-[13px] tracking-[0.65px]
                                                                xl:w-[200px] xl:h-[65px] xl:text-[21px]"
          >
            PICK A PLAN
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
