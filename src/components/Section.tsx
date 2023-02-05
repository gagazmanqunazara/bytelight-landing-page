"use client";

import Button from "./Button";
import ArrowLeft from "./icons/ArrowLeft";
import SectionIcon from "./SectionIcon";

const Section = () => {
  return (
    <div className="lg:h-screen py-15 lg:my-0 flex md:flex-row items-center w-full">
      <div className="hidden lg:inline lg:mx-0 ">
        <SectionIcon />
      </div>
      <div className="max-w-3xl">
        <p className="paragraph-regular font-medium text-metallic">
          SOLUTIONS FOR EVERY FACTOR
        </p>

        <h3>Solutions for business collaborations⚡.</h3>
        <p className="paragraph-small mt-6">
          Creating custom software solutions that enhance efficiency and
          streamline operations for a variety of industries, including
          individuals, businesses, organizations, and institutions.
        </p>

        <div className="flex items-center mt-8">
          <div className="bg-[#E9E5FF] p-3 rounded-3xl">
            <img src="/images/DeployStar.svg" />
          </div>

          <Button
            type="link"
            size="xl"
            withIcon={true}
            icon={ArrowLeft}
            className="flex items-center"
          >
            Deploy
          </Button>
        </div>

        <p className="paragraph-small mt-4">
          Deploy is designed to automate and input the manual processesof
          software administration and management, thereby freeing up the
          engineers to do what they do best.
        </p>
      </div>
    </div>
  );
};

export default Section;
