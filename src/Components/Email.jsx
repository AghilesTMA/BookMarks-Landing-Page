import { useState } from "react"
import Error from "./Error"

const Email = () => {
  const [value,setValue] = useState("");
  return (
    <div className=" relative">
      <input type="email" placeholder="Enter your email address" value={value} onChange={(e)=>setValue(e.target.value)} className=" relative peer py-2 px-6 text-lg text-black rounded invalid:border-Primary-Red invalid:border-solid invalid:border-2  outline-none " />
      <span className="  peer-invalid:block hidden text-start bg-Primary-Red px-2 rounded-b">Whoops, make sure it&apos;s an email</span>
      <Error styles={" hidden peer-invalid:block absolute top-[14px] right-2"}/>
    </div>
  )
}

export default Email;