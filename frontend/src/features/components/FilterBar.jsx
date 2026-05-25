import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";

function FilterBar({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border mb-5">

      <div className="flex gap-4">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search tickets..."
        />

        <StatusFilter
          value={status}
          onChange={setStatus}
        />

      </div>

    </div>
  );
}

export default FilterBar;