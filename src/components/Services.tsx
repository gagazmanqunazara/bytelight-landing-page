import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Custom software development",
    img: "/images/services/csd.svg",
    desc: "We design and build custom software applications to meet the specific needs of our clients",
  },
  {
    title: "Business consulting",
    img: "/images/services/bc.svg",
    desc: "Assisting other companies in improving business strategies and operations.",
  },
  {
    title: "Web development services",
    img: "/images/services/wds.svg",
    desc: "Creating and designing functional website for businesses or individuals.",
  },
  {
    title: "Application maintenance and support",
    img: "/images/services/amas.svg",
    desc: "We ensure software applications run smoothly and efficiently through ongoing support and maintenance",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col justify-center pt-15 pb-10">
      <div className="max-w-[84rem]">
        <p className="paragraph-regular font-medium text-purple">
          SOLUTIONS FOR EVERY FACTOR
        </p>

        <h3>
          Software architecture, design and implementation for any industry🔥.
        </h3>
      </div>

      <div className="grid grid-flow-col gap-6 mt-14 w-full overflow-x-auto snap-proximity snap-x pb-5">
        {servicesData.map(({ title, img, desc }) => {
          return (
            <ServiceCard key={title} title={title} img={img} desc={desc} />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
