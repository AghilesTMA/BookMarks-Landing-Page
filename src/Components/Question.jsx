import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Question = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-[1px] border-b-solid border-gray-400 w-full first:border-t-[1px] first:border-solid first:border-t-gray-500">
      <div
        className=" group flex justify-between items-center p-4 cursor-pointer gap-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className=" group-hover:text-Primary-Red font-bold text-lg text-Nuetral-D-Blue">
          {title}
        </h3>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={` text-2xl text-Primary-Blue font-bold transition-all duration-300 ${
            isOpen ? "rotate-180 text-Primary-Red" : ""
          } `}
        />
      </div>
      {isOpen ? (
        <p className={`p-4 opacity-50`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          assumenda et officia rem, nisi sunt quaerat tenetur sequi tempore
          necessitatibus veritatis voluptas consectetur quidem mollitia, aliquid
          eaque sit suscipit quam?
        </p>
      ) : null}
    </div>
  );
};

export default Question;
