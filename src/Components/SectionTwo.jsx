import { useState } from "react";
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureThree from "./FeatureThree";

const SectionTwo = () => {
  const Features = ["Simple Bookmarking", "Speedy Searching", "Easy sharing"];
  const [selectedFeature, setSelectedFeature] = useState("Simple Bookmarking");

  return (
    <section className="flex justify-center flex-col md:p-8 mt-12">
      <div className="p-4 flex justify-center text-center flex-col gap-2 items-center ">
        <h2 className="font-bold text-2xl text-Nuetral-D-Blue">Features</h2>
        <p className="opacity-50 max-w-xs md:max-w-lg">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync beteen your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex flex-col p-4 justify-center items-center">
        <ul className="flex flex-col text-center justify-center md:flex-row w-full">
          {Features.map((feature) => (
            <li
              key={feature}
              className={`w-full md:border-t-0 md:border-b-2 md:border-b-slate-500 md:border-b-solid md:px-8 last:border-b-w last:border-b-2 last:border-b-slate-500 border-t-2 border-t-slate-500 border-t-solid py-4 font-medium opacity-50 cursor-pointer relative ${
                feature == selectedFeature
                  ? "after:content-[''] after:w-2/4 after:h-1 after:bg-Primary-Red after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto opacity-[100%] md:after:w-full"
                  : ""
              }`}
              onClick={() => setSelectedFeature(feature)}
            >
              {feature}
            </li>
          ))}
        </ul>
        <div className="py-12 flex justify-center text-center flex-col gap-12 items-center md:flex-row">
          {selectedFeature == Features[0] ? (
            <>
              <div className="relative">
                <FeatureOne />
                <div className="w-full absolute bg-Primary-Blue h-[80%] bottom-[-15%] left-[-50%] rounded-full -z-10"></div>
              </div>
              <div className="flex justify-center text-center flex-col gap-2 items-center ">
                <h2 className="font-bold text-2xl text-Nuetral-D-Blue">
                  Bookmark in one click
                </h2>
                <p className="opacity-50 max-w-xs md:max-w-lg">
                  Organize your book markes however you like. Our simple
                  drag-and-drop inteface gives you complete control over how
                  you manage your favorite sites.
                </p>
              </div>
            </>
          ) : null}
          {selectedFeature == Features[1]?
            <>
              <div className="relative">
                <FeatureTwo />
                <div className="bottom-[-15%] w-[200%] absolute bg-Primary-Blue h-[80%]  left-[-130%] rounded-full -z-10"></div>
              </div>
              <div className="flex justify-center text-center flex-col gap-2 items-center ">
                <h2 className="font-bold text-2xl text-Nuetral-D-Blue">
                  Intelligent Search
                </h2>
                <p className="opacity-50 max-w-xs md:max-w-lg">
                  Our powerful search feature help you find saved sites in no time at all. No need to trawl through all of  your bookmarks.
                </p>
                <button type="button" className="px-6 md:py-2 bg-Primary-Blue rounded text-white shadow-md hover:text-Primary-Blue hover:bg-transparent hover:border-2 hover:border-Primary-Blue border-2 border-transparent">More Info</button>
              </div>
            </>
          :null}
          {selectedFeature == Features[2]?
            <>
              <div className="relative">
                <FeatureThree />
                <div className="w-[200%] absolute bg-Primary-Blue h-[80%] bottom-[-15%] left-[-130%] rounded-full -z-10"></div>
              </div>
              <div className="flex justify-center text-center flex-col gap-2 items-center ">
                <h2 className="font-bold text-2xl text-Nuetral-D-Blue">
                  Share your bookmarks
                </h2>
                <p className="opacity-50 max-w-xs md:max-w-lg">
                  Easly share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                </p>
                <button type="button" className="px-6 md:py-2 bg-Primary-Blue rounded text-white shadow-md hover:text-Primary-Blue hover:bg-transparent hover:border-2 hover:border-Primary-Blue border-2 border-transparent">More Info</button>
              </div>
            </>
          :null}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
