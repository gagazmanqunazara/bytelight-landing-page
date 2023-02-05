import Button from "./Button";
import Campaign from "./icons/Campaign";
import Send from "./icons/Send";

const CTA = () => {
  return (
    <div className="flex flex-col gap-15 pt-15 pb-[20rem]">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-0">
        <h1 className="lg:flex lg:flex-col">
          <span>Subscribe to</span>{" "}
          <span className="text-palatinate">our newsletter</span>
        </h1>
        <div className="flex gap-3 items-center lg:max-w-[45rem] lg:p-6 pr-0">
          <div className="bg-[#F5F4F3] p-2 rounded-lg">
            <Campaign />
          </div>
          <p className="paragraph-regular">
            Get the latest <span className="text-palatinate">free</span> event
            conference notification and a reminder of upcoming speakers
          </p>
        </div>
      </div>
      <div className="max-w-[55rem] flex flex-col gap-6">
        <input
          type="text"
          className="border-2 border-[#E6E6E6] rounded-full p-4 outline-smoke transition-all"
          placeholder="Your email adress"
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            <p className="font-medium paragraph-cation">
              I agree with{" "}
              <Button type="link" size="xs">
                Privacy Policy
              </Button>{" "}
              and{" "}
              <Button type="link" size="xs">
                Terms of Conditions
              </Button>
            </p>
          </div>
          <Button type="primary" size="md" withIcon={true} icon={Send}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
