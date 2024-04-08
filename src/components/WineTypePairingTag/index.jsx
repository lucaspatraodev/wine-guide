export default function WineTypePairingTag({ tagTitle, tagColor }) {
  return (
    <div
      className={`w-auto h-4 rounded-full border-2 p-4 flex justify-center items-center`}
      style={{ borderColor: tagColor }}
    >
      <p
        className={`font-light text-sm text-${tagColor}`}
        style={{ color: tagColor }}
      >
        {tagTitle}
      </p>
    </div>
  );
}
