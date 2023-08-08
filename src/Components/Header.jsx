import BookMarkLogo from "./BookMarkLogo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import { OpenMenu } from "../context/ContextProvider";
import { useContext} from "react";




const Header = () => {
  const { isOpen, setIsOpen } = useContext(OpenMenu);
  return (
    <header className={`flex justify-between items-center md:px-12 md:py-8 py-4 px-4 ${isOpen?'after:w-full sticky top-0 z-50':'after:w-0'} after:content-[''] after:absolute after:transition-all after:duration-300 after:bg-Nuetral-D-Blue-transparent after:inset-y-0 after:right-0 after:-z-10 h-[10vh] md:h-[auto] relative`}>
      <BookMarkLogo color={`${isOpen?"white":"black"}`} circleColor={isOpen?"white":"#5267DF"} markColor={isOpen?"#242B46":"white"}/>
      <nav className={`${isOpen?"translate-x-0":"translate-x-full"} md:translate-x-0 transition-transform duration-300 md:block h-[80vh] md:h-[auto] fixed md:relative top-[10vh] inset-x-0 md:top-[auto] z-50`}>
        <ul className="flex md:justify-between md:items-center md:gap-4  h-full md:h-[auto] bg-Nuetral-D-Blue-transparent md:bg-transparent text-white md:text-black flex-col md:flex-row items-center py-8 md:py-0 text-xl md:text-base px-8 md:px-0  ">
          <li className="border-b-[1px] md:border-b-0 border-t-[1px] md:border-t-0 border-white border-solid w-full flex justify-center py-4 md:py-0"><a href="#" className="uppercase hover:text-Primary-Red  cursor-pointer ">features</a></li>
          <li className="border-b-[1px] md:border-b-0 border-white border-solid w-full flex justify-center py-4 md:py-0"><a href="#" className="uppercase hover:text-Primary-Red  cursor-pointer ">pricing</a></li>
          <li className="border-b-[1px] md:border-b-0 border-white border-solid w-full flex justify-center py-4 md:py-0"><a href="#" className="uppercase hover:text-Primary-Red  cursor-pointer ">contact</a></li>
          <button type="button" className="uppercase md:px-6 md:py-2 md:bg-Primary-Red md:rounded md:text-white md:shadow-md md:hover:text-Primary-Red md:hover:bg-transparent md:hover:border-2 md:hover:border-Primary-Red md:border-2 md:border-transparent font-medium border-white border-2 border-solid rounded py-2 w-full mt-4 md:mt-0 hover:text-Primary-Red hover:border-Primary-Red">login</button>
        </ul>
      </nav>
      {isOpen?
      <FontAwesomeIcon icon={faXmark}  className={`md:hidden text-3xl hover:text-Primary-Red cursor-pointer ${isOpen?"text-white":""}`} onClick={()=>setIsOpen(prev=>!prev)}/>:
      <FontAwesomeIcon icon={faBars}  className={`md:hidden text-3xl hover:text-Primary-Red cursor-pointer ${isOpen?"text-white":""}`} onClick={()=>setIsOpen(prev=>!prev)}/>
      } 
    </header>
  );
};

export default Header