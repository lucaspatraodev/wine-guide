import SignatureInfoCard from "../SignatureInfoCard";
import howItWorksData from "../../data/signature.json";

export default function SignatureSection() {
  return (
    <section className="flex flex-col items-center max-w-screen gap-4 h-auto my-12 p-4 bg-white">
      <div className="flex flex-col items-center">
        <h1 className="text-[#FCA311] font-bold text-2xl md:text-3xl">
          How it works
        </h1>
        <p className="text-[#14213D] font-semibold text-center text-lg">
          Cras vehicula in nisi at ullamcorper. Integer iaculis suscipit enim,
          eget!
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4 md:p-12 gap-8 md:gap-6 md:flex-row">
        {howItWorksData.map((info) => {
          return (
            <SignatureInfoCard
              key={info.id}
              photoSrc={info.photoSrc}
              title={info.title}
              description={info.description}
            />
          );
        })}
      </div>

      <button className="bg-[#14213D] hover:bg-[#FCA311] text-white w-[350px] sm:p-10 sm:text-2xl sm:m-4 md:w-48 font-bold p-4 md:py-2 md:px-4 rounded">
        Sign now!
      </button>
    </section>
  );
}
