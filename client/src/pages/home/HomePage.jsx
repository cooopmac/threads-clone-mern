import React from "react";
import { sidebarLinks } from "../../constants/constants";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const pathname = useLocation();
  console.log(pathname.pathname);

  return (
    <section className="sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-black bg-black pb-5 pt-5">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            link.route.length > 1 || pathname.pathname === link.route;

          return (
            <div
              className={`relative flex justify-start gap-4 rounded-lg p-4 ${
                isActive && "bg-white"
              }`}
            >
              <img
                src={link.imgURL}
                key={link.label}
                alt={link.label}
                className="w-[24px] h-[24px]"
              />
              <a href={link.route} key={link.label} className="text-white">
                {link.label}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomePage;
