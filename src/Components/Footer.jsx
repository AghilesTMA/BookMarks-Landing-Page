import { useContext } from "react";
import BookMarkLogo from "./BookMarkLogo";
import {AiFillFacebook,AiOutlineTwitter} from "react-icons/ai";
import { OpenMenu } from "../context/ContextProvider";

const Footer = () => {
  const {isOpen} = useContext(OpenMenu);
  return (
    <footer className=" bg-Nuetral-D-Blue p-12 text-white flex flex-col md:flex-row items-center gap-8 justify-between ">
      <BookMarkLogo
        color={"#fff"}
        circleColor={"#5267DF"}
        markColor={"white"}
      />
      <ul className="flex flex-col md:flex-row uppercase gap-4">
        <li className=" cursor-pointer hover:text-Primary-Red">features</li>
        <li className=" cursor-pointer hover:text-Primary-Red">pricing</li>
        <li className=" cursor-pointer hover:text-Primary-Red">contact</li>
      </ul>
      <ul className={`flex flex-row gap-8 items-center ${isOpen?" fixed bottom-0 w-full left-0 bg-Nuetral-D-Blue-transparent h-[10vh] justify-center":""}`}>
        <li>
          <AiFillFacebook className="hover:text-Primary-Red cursor-pointer text-3xl"/>
        </li>
        <li>
          <AiOutlineTwitter className="hover:text-Primary-Red cursor-pointer text-3xl"/>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
