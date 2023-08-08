import Email from "./Email";

const SectinoFive = () => {
  return (
    <section className=" bg-Primary-Blue px-4 py-12 text-white flex flex-col items-center gap-8 text-center">
      <span className="">3 5 , 0 0 0 &nbsp;+&nbsp; A L R E A D Y &nbsp;&nbsp;&nbsp;J O I N E D</span>
      <h3 className=" font-medium text-2xl">Stay up-to-date with  what we&apos;re doing</h3>
      <div className="flex flex-col gap-4 items-center md:flex-row md:items-start">
        <Email />
        <button type="button" className="px-6 py-2 bg-Primary-Red rounded text-white shadow-md hover:text-Primary-Red hover:bg-white hover:border-2 hover:border-Primary-Red border-2 border-transparent w-full">Contact Us</button>
      </div>
    </section>
  )
}

export default SectinoFive;