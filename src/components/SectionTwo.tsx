"use client";

import Button from "./Button";
import ArrowLeft from "./icons/ArrowLeft";
import SectionTwoIcon from "./SectionTwoIcon";

const SectionTwo = () => {
  return (
    <div className="lg:h-screen py-15 lg:my-0 flex lg:flex-row-reverse lg:justify-end items-center w-full">
      <div className="hidden lg:flex lg:mx-0 lg:grow lg:justify-center">
        <SectionTwoIcon />
      </div>
      <div className="max-w-3xl">
        <p className="paragraph-regular font-medium text-purple">
          SOLUTIONS FOR EVERY FACTOR
        </p>

        <h3>Expert Software Solutions for businesses and individuals</h3>
        <p className="paragraph-small mt-6">
          We design and implement custom software to improve efficiency and
          streamline operations for a variety of industries, including
          individuals, businesses, organizations, and institutions.
        </p>

        <Button type="primary" size="sm" className="mt-15">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default SectionTwo;
