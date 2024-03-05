import AboutUsCardsInfo from "./../../data/aboutSection.json";
import AboutInfoCard from "../AboutInfoCard/index.jsx";
import aboutImage from "/aboutUs/aboutUs.svg";

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-4 pt-8 w-screen h-auto justify-center md:rounded-tl-3xl md:rounded-tr-3xl bg-[#14213D]">
      <div className="text-center">
        <h1 className="text-[#FCA311] font-semibold text-4xl leading-10">
          About Us
        </h1>
        <p className="text-white font-semibold text-sm leading-5">
          Lorem Ipsum is simply
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row md:gap-24 mx-8">
        <div className="overflow-hidden rounded-r-lg w-full h-full p-4 md:h-full md:p-4 md:w-1/2">
          <img src={aboutImage} alt="People drinking wine at house" />
        </div>

        <div className="flex flex-col items-center p-4 gap-8 md:grid md:grid-cols-2 md:grid-rows-2 md:w-1/2 place-self-center">
          {AboutUsCardsInfo.map((info) => {
            return (
              <AboutInfoCard
                title={info.title}
                description={info.description}
                key={info.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
