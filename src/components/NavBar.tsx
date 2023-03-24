import Image from "next/image";
import React from "react";
import logo from "@src/src/assets/LogoNinja.png";

const NavBar: React.FC = () => {
  const navBarItem: string[] = ["FEATURES", "PRICING", "SERVICES", "PARTNERS"];

  return (
    <nav
      className="h-[62px] left-0 right-0 top-0 pt-[9px] px-3 
                    md:h-[66px] xl:h-[102px]
                    xl:pt-5 xl:px-16"
    >
      <div className="flex min-w-full gap-[30px] md:justify-between">
        <a href="#" className="flex text-[22px] font-black pt-[5px]">
          <Image alt="logo" src={logo} className="" />
        </a>

        <ul
          className="pr-[1px] md:pr-[4px] md:flex pt-[11px] 
        tracking-[0.825px] font-extrabold 
        md:gap-[15px] xl:gap-[24px] text-[11px] xl:text-[17px] xl:pr-9"
        >
          {navBarItem.map((item, idx) => {
            return (
              <li
                className="hidden w-[71px] lg:w-[110px] pt-[3px] md:flex flex-col items-center gap-[3px]"
                key={idx}
              >
                <a href="#" className="">
                  {item}
                </a>
                <div className="bg-btnBgColor w-full md:h-[3px] xl:h-[5px]" />
              </li>
            );
          })}
          <li className="bg-btnBgColor w-[110px] h-[25px] flex px-[6px] py-[13.5px] text-white xl:w-[168px] xl:h-[41px]">
            <a href="#" className="text-center w-full self-center">
              SIGN UP FREE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
