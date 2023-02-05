"use client";

import Button from "./Button";
import ArrowLeft from "./icons/ArrowLeft";
import SectionThreeIcon from "./SectionThreeIcon";

const SectionThree = () => {
  return (
    <div className="lg:h-screen py-15 lg:my-0 flex md:flex-row items-center w-full">
      <div className="hidden lg:flex lg:mx-0 lg:w-[800px] lg:justify-center">
        <SectionThreeIcon />
      </div>
      <div>
        <p className="paragraph-regular font-medium text-metallic">
          WORK WITH US
        </p>

        <h3 className="pb-6 border-b border-[#EEEEEE]">
          Revamp your business strategies with us today!
        </h3>
        <p className="paragraph-small mt-6">
          Rethink and revamp the ways your business operates to create new and
          improved solutions
        </p>

        <Button type="primary" size="sm" className="mt-15">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default SectionThree;
