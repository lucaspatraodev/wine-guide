export default function TextField({
  label,
  placeholder,
  inputValue,
  onValueChange,
  name,
  autoComplete = "off",
}) {
  function handleOnChange(ev) {
    onValueChange(ev.target.value);
  }

  return (
    <div className="w-full md:w-4/6 mx-auto">
      <label className="text-left block mb-2 text-sm font-medium text-black">
        {label}
      </label>
      <input
        name={name}
        type="text"
        value={inputValue}
        onChange={(ev) => {
          handleOnChange(ev);
        }}
        className="bg-[#E2E6EE] border border-gray-400 text-sm rounded-lg focus:ring-[#FCA311] focus:border-[#FCA311] focus:outline-none block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
