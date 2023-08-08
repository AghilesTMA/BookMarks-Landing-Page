import Question from "./Question";

const SectionFour = () => {
  const questions = ["What is book mark?","How can I request a new browser?","Is there a mobile app?","What about other Chromuim browsers?"]
  return (
    <section className="p-8 mt-4 flex flex-col gap-8 items-center">
      <div className="p-4 flex justify-center text-center flex-col gap-2 items-center ">
        <h2 className="font-bold text-2xl text-Nuetral-D-Blue">
          Frequently Asked Questions
        </h2>
        <p className="opacity-50 max-w-xs md:max-w-lg">
          Here are some of our FAQs. if you have any other questions you&apos;d
          like answered please feel free to email us.
        </p>
      </div>
      <div className="w-full max-w-2xl">
        {questions.map(question=><Question key={question} title={question}/>)}
      </div>
      <button type="button" className="px-6 py-2 bg-Primary-Blue rounded text-white shadow-md hover:text-Primary-Blue hover:bg-transparent hover:border-2 hover:border-Primary-Blue border-2 border-transparent">More Info</button>
    </section>
  );
};

export default SectionFour;
