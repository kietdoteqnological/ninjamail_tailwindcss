import React from "react";
import member1 from "@src/src/assets/desktop/member1.png";
import member2 from "@src/src/assets/desktop/member2.png";
import member3 from "@src/src/assets/desktop/member3.png";
import brand1 from "@src/src/assets/desktop/brand1.png";
import brand2 from "@src/src/assets/desktop/brand2.png";
import brand3 from "@src/src/assets/desktop/brand3.png";
import brand4 from "@src/src/assets/desktop/brand4.png";
import brand5 from "@src/src/assets/desktop/brand5.png";
import PhotoMember, { PhotoMemberProps } from "./PhotoMember";
import Image from "next/image";

const EmailSendSection: React.FC = () => {
  const listMember: PhotoMemberProps[] = [
    {
      image: member1,
      name: "Frankie",
      since: "Member since 2016",
    },
    {
      image: member2,
      name: "Camile",
      since: "Member since 2012",
    },
    {
      image: member3,
      name: "Elayne",
      since: "Member since 2018",
    },
  ];

  return (
    <section className="pt-[47px] md:pt-[141px] xl:pt-[217px] z-10">
      <div className="flex px-12 flex-col gap-[59px] md:gap-[25px] z-10">
        <div className="flex flex-col gap-[21px] w-full md:flex-row md:gap-[19.5px] lg:gap-8 lg:justify-center">
          {listMember.map((member) => {
            return (
              <PhotoMember
                key={member.name}
                image={member.image}
                name={member.name}
                since={member.since}
              />
            );
          })}
        </div>
        <div className="flex flex-col items-center">
          <h2
            className="text-[26px] font-black text-center font-Montserrat leading-9 h-[155px]
                        md:w-[591px] md:text-[28px] md:h-[89px]
                        xl:w-[904px] xl:h-[126px] xl:text-[44px] xl:leading-[48px]"
          >
            Learn how others are reaching their audience easier than ever
            before.
          </h2>
          <div className="pt-[5px] flex flex-col md:flex-row md:gap-[17px] lg:pt-[15px] lg:gap-[27px]">
            <div className="flex flex-col md:items-start md:gap-[5px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="box-border border border-borderInput rounded placeholder-black
                        w-[223px] h-[42px] py-[13px] px-[14px] text-[13px]
                        md:w-[275px]
                        lg:w-[420px] lg:h-[65px] lg:text-[21px] lg:py-[19px] lg:px-[25px]"
              />
              <p className="pt-[6px] text-center text-btnBgColor text-xs tracking-[0.6px] font-medium md:ml-[16px] xl:text-[21px] xl:pt-[20px]">
                Thanks! Email received
              </p>
            </div>
            <div className="flex w-full justify-center">
              <button
                className="font-black text-white w-36 h-[42px] text-[13px] mt-[7px] bg-btnBgColor px-[22px] py-[13px]
                                                        md:mt-0
                                                        lg:w-[221px] lg:h-[65px] lg:text-[21px] "
              >
                JOIN OUR LIST
              </button>
            </div>
          </div>

          <div className="pt-[54px] flex md:w-80 md:pt-[50px] lg:pt-[75px] xl:w-[500px]">
            <h2
              className="font-black font-Montserrat w-[281px] h-[110px] text-[26px] text-center
                                                    md:w-[617px] md:text-[28px] leading-9
                                                    xl:text-[44px] xl:w-[994px] lg:h-[124px]"
            >
              All the best brands already use us.
            </h2>
          </div>
          <div
            className="flex flex-col w-[237px] h-[137px] gap-[29px] items-center
                               md:flex-row md:gap-[43px] md:w-[605px] md:h-[31px] md:pt-[2px]
                               xl:pt-[47px] xl:w-[926px] xl:h-12 xl:gap-[65px]"
          >
            <div className="flex justify-between w-full md:gap-[43px] xl:gap-[65px]">
              <div className="w-1/2 flex justify-center md:w-auto ">
                <Image
                  src={brand2}
                  alt="brand2"
                  className="w-[55px] h-[29px] xl:w-[85px] xl:h-[44px]"
                />
              </div>
              <div className="w-1/2 flex justify-center md:w-auto">
                <Image
                  src={brand5}
                  alt="brand5"
                  className="w-[92px] h-[17px] xl:w-[138px] xl:h-[22px]"
                />
              </div>
            </div>
            <div className="flex justify-between w-full md:gap-[43px] lg:gap-[65px]">
              <div className="w-1/2 flex justify-center md:w-auto">
                <Image
                  src={brand1}
                  alt="brand1"
                  className="w-[104px] h-[22px] xl:w-40 xl:h-[33px]"
                />
              </div>
              <div className="w-1/2 flex justify-center md:w-auto">
                <Image
                  src={brand4}
                  alt="brand4"
                  className="w-[91px] h-[15px] xl:w-[141px] xl:h-[25px]"
                />
              </div>
            </div>
            <Image
              src={brand3}
              alt="brand3"
              className="w-[94px] h-[31px] xl:w-[145px] xl:h-[48px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSendSection;
