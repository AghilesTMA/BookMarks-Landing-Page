import TabletSvg from "./TabletSvg";

const HeroSection = () => {
  return (
    <main className="overflow-hidden flex flex-col items-center md:flex-row-reverse md:gap-4 md:justify-between md:pl-8 py-12">
      <div className="w-full max-w-[430px] flex justify-center items-center relative h-[300px] lg:justify-end">
        <TabletSvg />
        <div className="absolute w-11/12 rounded-full bottom-[5%] right-[-25%] bg-Primary-Blue aspect-video -z-20 md:bottom-0 md:right-[-65%] md:w-[150%] md:aspect-auto md:h-5/6 "></div>
      </div>
      <div className="flex flex-col gap-8 p-4 text-center items-center md:items-start md:text-left md:w-1/2">
        <h1 className="font-bold text-2xl max-w-[250px] text-Nuetral-D-Blue">A Simple Book Mark Manager</h1>
        <p className="text-lg max-w-xs opacity-50">
          A clean and simple interface to organize you favorite websietes. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="w-full flex justify-evenly items-center px-4 gap-2 md:justify-start md:gap-8 md:p-0">
          <button type="button" className="px-6 md:py-2 bg-Primary-Blue rounded text-white shadow-md hover:text-Primary-Blue hover:bg-transparent hover:border-2 hover:border-Primary-Blue border-2 border-transparent">Get in on Chrome</button>
          <button type="button" className="px-6 md:py-2 bg-slate-100 rounded text-Nuetral-D-Blue shadow-md  hover:border-2 hover:border-black border-2 border-transparent">Get in on Firefox</button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
