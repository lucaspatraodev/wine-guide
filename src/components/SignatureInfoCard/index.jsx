export default function SignatureInfoCard({
  key,
  photoSrc,
  photoAlt,
  title,
  description,
}) {
  return (
    <div
      className="flex flex-col items-center p-6 sm:p-8 h-auto w-full max-[600px]:max-w-3/4 min-[600px]:max-w-4/12 min-[1200px]:max-w-2/12 gap-2 rounded-lg bg-[#14213D] shadow-lg"
      key={key}
    >
      <img
        src={`/signature/${photoSrc}`}
        alt={photoAlt}
        className="w-[230px] h-[200px] p-1 rounded-2xl"
      />

      <div className="flex flex-col text-center gap-2 p-1">
        <div className="h-2/5">
          <h1 className="text-[#FCA311] text-3xl  sm:text-2xl font-bold">
            {title}
          </h1>
        </div>
        <div className="h-2/5">
          <p className="text-white text-md sm:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
