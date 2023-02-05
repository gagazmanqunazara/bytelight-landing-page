const Testimonials = () => {
  return (
    <div className="max-w-[106rem] mx-auto py-14">
      <p className="paragraph-extra-large font-medium max-w-[48rem] mx-auto text-center">
        Used by over <span className="text-purple">50+ million</span> users
        worldwide and trusted by top-tier companies
      </p>
      <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 place-items-center gap-6">
        <img src="/images/testimonials/forbes.svg" />
        <img src="/images/testimonials/fortune.svg" />
        <img src="/images/testimonials/tc.svg" />
        <img src="/images/testimonials/wsj.svg" />
        <img src="/images/testimonials/ft.svg" />
        <img src="/images/testimonials/cnbc.svg" />
      </div>
    </div>
  );
};

export default Testimonials;
