import React from "react";
import ButtonAccent from "../Button/ButtonAccent";
import ButtonPrimary from "../Button/ButtonPrimary";

const Hero = () => {
  return (
    <div className="bg-dar-bg relative overflow-hidden">
      <img
        src="/decor-wave.svg"
        className="md:block animate-spin absolute left-0 z-10 hidden"
        alt="decor-wave"
      />
      <img
        src="/decor-wave.svg"
        className="animate-spin top-1/3 absolute right-0 z-10"
        alt="decor-wave"
      />
      <img
        src="/decor-wave.svg"
        className="md:block animate-spin left-1/2 bottom-8 absolute z-10 hidden"
        alt="decor-wave"
      />
      <section className="max-w-contain relative z-20 py-12 mx-auto">
        <div className="relative flex justify-center">
          <img
            src="/davies esiro.png"
            className="md:w-40 w-28 "
            alt="Davies Esiro"
          />
          <div className="top-2 left-1/2 border-primary border-3 absolute w-48 h-full ml-1 transform -translate-x-1/2 rounded-full" />
        </div>
        <Roles />
        <Typo />
        <ButtonGroup />
      </section>
    </div>
  );
};

const Roles = () => (
  <div className="md:text-sm mt-4 text-xs text-center">
    <span className="mr-5 text-gray-500">Roles {"   =>"}</span>
    <span className="hover:text-accent-variant tracking-wide text-gray-300 duration-200 cursor-pointer">
      Frontend, Backend and Mobile
    </span>
  </div>
);

const Typo = () => (
  <div className="mt-4 text-center">
    <h1 className="text-primary lg:text-6xl 2xl:text-7xl 2xl:leading-snug text-5xl font-bold">
      I Bring your dream
      <br />
      project to life
    </h1>

    <p className="md:max-w-prose md:text-base max-w-xs mx-auto mt-4 text-sm leading-relaxed text-white">
      My name is Davies Esiro. I build responsive, scalable and high performance
      products.
    </p>
  </div>
);

const ButtonGroup = () => (
  <div className=" mt-10 text-center">
    <ButtonPrimary className="w-40 px-3 py-4 text-sm">
      View CV/Resume
    </ButtonPrimary>
    <span className="inline-block w-5"></span>
    <ButtonAccent className="w-40 px-3 py-4 text-sm">Contact Me</ButtonAccent>
  </div>
);
export default Hero;
