import { Search } from "lucide-react";

function SearchBar({
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="flex items-center flex-1 border rounded-lg px-3 bg-gray-50">

      <Search
        size={18}
        className="text-gray-400"
      />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full p-2 bg-transparent outline-none text-sm"
      />

    </div>
  );
}

export default SearchBar;