const ArrowLeft = () => {
  return (
    <svg
      width={`${21 / 14 * 0.7}em`}
      height=".7em"
      viewBox="0 0 21 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-4"
    >
      <path d="M14 1L20 7L14 13" fill="black" />
      <path
        d="M1 7H20M20 7L14 1M20 7L14 13"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
