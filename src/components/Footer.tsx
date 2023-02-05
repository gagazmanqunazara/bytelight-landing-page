import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-[7rem] md:pt-[18rem]">
      <div className="max-w-[95rem] mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-[7rem] md:gap-[20%] md:items-start border-b border-smoke pb-[7rem]">
          <img
            src="/images/bytelight-large-white.svg"
            className="md:w-[25%] place-self-start"
          />
          <div className="grid grid-cols-1 gap-6 md:gap-0 content-between sm:grid-cols-3 md:w-[55%]">
            <div className="flex flex-col gap-6">
              <h4>Products</h4>
              <p className="paragraph-regular text-smoke">Deploy</p>
              <p className="paragraph-regular text-smoke">Blog</p>
            </div>
            <div className="flex flex-col gap-6">
              <h4>Company</h4>
              <p className="paragraph-regular text-smoke">About Us</p>
              <p className="paragraph-regular text-smoke">Industries</p>
              <p className="paragraph-regular text-smoke">How we work</p>
              <p className="paragraph-regular text-smoke">Career</p>
            </div>
            <div className="flex flex-col gap-6">
              <h4>Support</h4>
              <p className="paragraph-regular text-smoke">Terms</p>
              <p className="paragraph-regular text-smoke">Privacy</p>
              <p className="paragraph-regular text-smoke">FAQs</p>
            </div>
          </div>
        </div>
        <div className="py-[7rem] flex justify-between items-center flex-col-reverse gap-[5rem] sm:gap-0 sm:flex-row">
          <p className="paragraph-small text-smoke">
            Bytelight. © 2023. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Instagram />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
