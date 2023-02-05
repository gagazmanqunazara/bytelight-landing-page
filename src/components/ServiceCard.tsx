interface ServiceCardProps {
  title: string;
  img: string;
  desc: string;
}

const ServiceCard = ({ title, img, desc }: ServiceCardProps) => {
  return (
    <div className="w-[27rem] border-[0.25rem] border-[#E6E6E6] rounded-[3.6rem] flex flex-col justify-between items-start p-6 snap-start">
      <div className="flex flex-col items-start flex-1">
        <div className="border-[0.25rem] border-[#E6E6E6] rounded-full p-5">
          <img src={img} />
        </div>
        <h5 className="mt-6">{title}</h5>
      </div>

      <p className="paragraph-small flex-1 pt-[20%]">{desc}</p>
    </div>
  );
};

export default ServiceCard;
