import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  photoSrc: StaticImageData;
  content: string;
  isEnd: boolean;
}

const PhotoCard: React.FC<Props> = ({ photoSrc, content, isEnd }) => {
  return (
    <div
      className={`w-[209px] h-[294px] flex drop-shadow-lg ${
        isEnd ? "self-end h-[290px]" : ""
      } lg:w-[320px] lg:h-[449px]`}
    >
      <div className={`${isEnd ? "md:mt-[53px]" : ""}`}>
        <Image src={photoSrc} alt="photo1" className="absolute" />
        <div
          className="relative top-[166px] px-5 py-[17px] bg-white w-[209px] h-32 text-xs flex flex-col gap-[1px] 
                                  xl:top-[253px] xl:px-[30px] lg:w-80 lg:h-[196px] xl:py-6 lg:text-base"
        >
          <p className="font-medium leading-4 lg:leading-6 w-[164px] h-[79px] lg:w-[251px] lg:h-[120px]">
            {content}
          </p>
          <a href="#" className="text-btnBgColor font-extrabold">
            Learn more &#62;
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
