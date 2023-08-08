import Card from "./Card"

const SectionThree = () => {
  const browsers = [{img:"./src/assets/logo-chrome.png",browser:"Chrome",version:"62"},{img:"./src/assets/logo-firefox.png",browser:"Firefox",version:"55"},{img:"./src/assets/logo-opera.png",browser:"Opera",version:"46"}];
  return (
    <section className="flex flex-col items-center gap-8 p-4 justify-center w-full">
      <div className="p-4 flex justify-center text-center flex-col gap-2 items-center ">
        <h2 className="font-bold text-2xl text-Nuetral-D-Blue">Download the extension</h2>
        <p className="opacity-50 max-w-xs md:max-w-lg ">
          We have got more browesers in the pipeline. Please do let us know if you have got a favourite you&apos;d like to prioritize.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-4">
        {browsers.map((browser,index)=><Card key={browser.browser} img={browser.img} browser={browser.browser} version={browser.version} number={index*2}/>)}
      </div>
    </section>
  )
}

export default SectionThree