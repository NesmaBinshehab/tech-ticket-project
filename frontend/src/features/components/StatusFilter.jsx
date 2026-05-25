function StatusFilter({
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="border rounded-lg px-4 py-2 text-sm bg-gray-50 outline-none"
    >

      <option value="all">
        All Tickets
      </option>

      <option value="open">
        Open
      </option>

      <option value="in-progress">
        In Progress
      </option>

      <option value="pending">
        Pending
      </option>

      <option value="closed">
        Closed
      </option>

    </select>
  );
}

export default StatusFilter;