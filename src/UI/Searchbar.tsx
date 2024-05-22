import { ChangeEvent, FormEvent, useState } from "react";

export default function Searchbar() {
  const [query, setQuery] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(() => e.target.value);
  }

  return (
    <div className="flex justify-center h-12">
      <input
        className="bg-slate-200 rounded-l-full py-2 px-4 my-2"
        type="text"
        onChange={handleChange}
        value={query}
        placeholder="Search for flowers!"
      />
      <button
        className="flex bg-slate-200 w-fit items-center border-l-2 border-slate-400 border-solid rounded-r-full py-2 px-4 my-2 hover:bg-slate-300"
        type="submit"
        onSubmit={(e) => handleSubmit(e)}
      >
        <span>Submit</span>
      </button>
    </div>
  );
}
