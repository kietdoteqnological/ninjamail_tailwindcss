import React from "react";
import photo1 from "@src/src/assets/desktop/girl2.png";
import photo2 from "@src/src/assets/desktop/group.png";
import PhotoCard from "./PhotoCard";

const ProvementSection: React.FC = () => {
  return (
    <section className="pt-[33px] md:pt-16 z-10 xl:px-16 ">
      <div className="flex flex-col md:flex-row px-[9px] md:px-[29px] gap-[18px] md:gap-8 xl:gap-[46px]">
        <div className="flex flex-col md:flex-row gap-[14.84px] md:gap-[30px] xl:gap-[46px]">
          <PhotoCard
            photoSrc={photo1}
            isEnd={false}
            content="Launch campaigns but also find new customers. Our unique
                platform handles campaigns from start to end."
          />
          <PhotoCard
            photoSrc={photo2}
            isEnd={true}
            content="Start building and sharing with your team today. NinjaMail is
            renowned for its industry leading team collaboration tools."
          />
        </div>
        <div className="w-[232px] md:w-60 xl:w-[365px] self-center">
          <h2 className="text-[28px] leading-[31px] font-Montserrat font-black xl:text-[44px] xl:leading-[48px]">
            The source for proven, engaging email campaigns
          </h2>
          <p
            className="text-xs xl:text-[19px] mt-[17px] w-[203px] h-[96px] leading-4 font-medium
                        xl:w-[322px] xl:h-[156px] md:leading-6 xl:pt-6 xl:leading-[26px]"
          >
            Whether you’re a startup, small business, e-commerce store, or want
            to promote your app, NinjaMail has the feature set tailored for your
            business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProvementSection;
