export default function AboutInfoCard({ title, description }) {
  return (
    <div className="flex flex-col gap-2 lg:w-[230px] h-auto p-2 text-center">
      <h1 className="text-md text-[#FCA311] font-semibold">{title}</h1>
      <p className="text-md md:text-sm text-white">{description}</p>
    </div>
  );
}
