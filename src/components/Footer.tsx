import Image from "next/image";
import React from "react";
import logo from "@src/src/assets/LogoNinja.png";

const Footer: React.FC = () => {
  return (
    <footer className="pt-[47px] h-[486px] md:h-[286px] xl:h-[433px] xl:pt-[73px]">
      <div className="px-[17px] md:px-[43px] xl:px-[228px]">
        <div className="flex flex-col md:flex-row md:gap-[129px] xl:gap-[194.61px]">
          <div className="w-[127px] h-[37.27px] xl:w-[197.39px] xl:h-[60.23px]">
            <Image src={logo} alt="logo" />
          </div>

          <div
            className="pt-[11px] flex gap-[72px] md:gap-[41px] text-xs leading-[14px] font-bold pb-[23px] md:pb-[49px]
                                                    xl:text-[19px] xl:leading-[22px] xl:pb-[74px] xl:gap-[58px]"
          >
            <div className="flex flex-col gap-[7px] md:flex-row md:gap-[39px] xl:gap-[57px]">
              <div className="flex flex-col gap-[7px] xl:gap-[10px]">
                <a href="">Features</a>
                <a href="">Pricing</a>
                <a href="">Services</a>
                <a href="">Partners</a>
              </div>
              <div className="flex flex-col gap-[7px] xl:gap-[10px]">
                <a href="">About Us</a>
                <a href="">Tutorials</a>
                <a href="">Resources</a>
                <a href="">Help Center</a>
                <a href="">Templates</a>
                <a href="">Case Studies</a>
              </div>
            </div>
            <div className="flex flex-col gap-[7px] md:flex-row md:gap-[39px] xl:gap-[57px]">
              <div className="flex flex-col gap-[7px] xl:gap-[10px]">
                <a href="">Medium</a>
                <a href="">Twitter</a>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
                <a href="">Linkedin</a>
              </div>
              <div className="flex flex-col gap-[7px] xl:gap-[10px]">
                <a href="">Contact Us</a>
                <a href="">Slack</a>
                <a href="">Jobs</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-72 md:w-[711px] lg:w-[1088px]" />

        <div
          className="pt-[22px] flex flex-col gap-[14px] text-[9px] leading-[19px] font-bold
                     md:pt-[25px] md:flex-row md:gap-[93px]
                     xl:text-[15px] xl:gap-[98px]"
        >
          <span className="w-[186px] h-[53px] md:w-[333px] md:h-[11px] xl:w-[555px] xl:h-[18px]">
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </span>
          <span
            className="flex flex-col gap-[9px]
                            md:flex-row md:gap-[30px] md:h-[11px] xl:gap-[35px]"
          >
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
