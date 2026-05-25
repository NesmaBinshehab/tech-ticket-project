import { useState } from "react";

import FilterBar from "../../components/FilterBar";

function Tickets() {

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("all");

  return (
    <div>

      <FilterBar
        search={search}
     setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <div className="bg-white rounded-xl p-4 shadow-sm">

        <h2 className="text-lg font-semibold mb-3">
          Tickets List
        </h2>

        <p className="text-sm text-gray-500">
          Search:
          {" "}
          {search}
        </p>

        <p className="text-sm text-gray-500">
          Status:
          {" "}
          {status}
        </p>

      </div>

    </div>
  );
}

export default Tickets;