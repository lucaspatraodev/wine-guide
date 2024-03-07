import backgroundImage from "/Banner/backgroundMain.png";
import wineGlassImage from "/Banner/wineglass2.png";

export default function MainContent({ onButtonClick }) {
  return (
    <main className="pt-8">
      <div
        className="w-screen min-h-screen max-h-screen flex justify-center items-center p-8 min-[600px]:p-24"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col min-[800px]:flex-row gap-4 min-[1400px]:gap-32 justify-center items-center">
          <div className="flex flex-col gap-4 items-start max-[800px]:text-center max-[800px]:items-center max-[800px]:min-w-full md:w-1/2">
            <h1 className="text-white text-4xl min-[600px]:text-5xl min-[1100px]:text-6xl text drop-shadow-lg font-bold">
              The finest wines delivered to your doorstep.
            </h1>
            <p className="text-white text-md drop-shadow-md min-[600px]:text-[19px]">
              Explore our curated selection of exceptional wines sourced from
              around the world.
            </p>
            <button
              onClick={onButtonClick}
              className="shadow-md bg-[#F2C94C] text-[#14213D] max-[600px]:w-[140px] md:w-[150px] text-[16px] max-[600px]:text-[16px] font-bold mt-2 p-4 rounded-[30px]"
            >
              More about
            </button>
          </div>

          <div>
            <img
              src={wineGlassImage}
              className="max-[600px]:h-[400px] max-[600px]:min-w-[250px] min-[600px]:h-[530px] min-[600px]:w-[330px] min-[1300px]:h-[700px] min-[1300px]:w-[400px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
