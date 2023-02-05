import Button from "./Button";

const Hero = () => {
  return (
    <div className="py-15">
      <div>
        <div>
          <p className="paragraph-regular font-medium">
            INDUSTRY SOFTWARE SOLUTION
          </p>

          <div className="flex lg:items-end flex-col lg:flex-row mt-5">
            <h3 className="flex-1">
              Custom digital platform software development
            </h3>
            <p className="paragraph-regular flex-1 mt-3 lg:mt-0">
              We specialize in developing custom software solutions that enhance
              efficiency and organization for a variety of clients in various
              industries.
            </p>
          </div>

          <div className="flex gap-3 mt-15">
            <Button type="primary" size="sm">
              Talk To Sales
            </Button>
            <Button type="secondary" size="sm">
              Check Our Products ✨
            </Button>
          </div>
        </div>
      </div>

      <img
        className="mt-15 h-[56rem] w-full object-cover rounded-3xl"
        src="/images/hero.png"
        alt="Hero Image"
      />
    </div>
  );
};

export default Hero;
