import Image, { StaticImageData } from "next/image";
import React from "react";

export interface PhotoMemberProps {
  image: StaticImageData;
  name: string;
  since: string;
}

const PhotoMember: React.FC<PhotoMemberProps> = ({ image, name, since }) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="member1"
        className="w-[223px] h-[157px] relative
                   lg:w-[341px] lg:h-[239px]"
      />
      <div className="flex flex-col absolute text-white z-20 bottom-[4.66px] left-[17.06px]">
        <span className="text-[22px] font-black not-italic">{name}</span>
        <span className="text-xs font-bold">{since}</span>
      </div>
    </div>
  );
};

export default PhotoMember;
