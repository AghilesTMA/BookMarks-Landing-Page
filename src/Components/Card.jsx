import Dots from "./Dots";
const Card = ({ img, browser, version, number }) => {
  const marginTop = {
    0:"md:mt-0",  
    2:"md:mt-8",
    4:"md:mt-16"
  }
  return (
    <div className={`flex flex-col items-center justify-between text-center gap-4 bg-slate-50 p-4 w-full max-w-[210px] h-[350px] ${marginTop[number]} overflow-hidden rounded-lg shadow-lg`}>
      <div className="flex flex-col items-center gap-8 py-4">
        <div>
          <img src={img} alt="Browser's icon" />
        </div>
        <div>
          <h2 className=" font-bold text-lg">Add to {browser}</h2>
          <p className=" opacity-50">Minimum verision {version}</p>
        </div>
      </div>
      <Dots />
      <button
        type="button"
        className=" py-2 w-full bg-Primary-Blue text-sm font-semibold rounded text-white shadow-md hover:text-Primary-Blue hover:bg-transparent hover:border-2 hover:border-Primary-Blue border-2 border-transparent"
      >
        Add & Install Extension
      </button>
    </div>
  );
};

export default Card;
