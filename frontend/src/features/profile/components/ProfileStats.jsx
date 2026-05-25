const stats = [
  { label: "إجمالي التذاكر", value: 12 },
  { label: "مفتوحة", value: 3 },
  { label: "مغلقة", value: 9 },
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-3 gap-4">

      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow p-5 text-center"
        >
          <h3 className="text-2xl font-bold text-cyan-600">
            {item.value}
          </h3>

          <p className="text-gray-500 text-sm">
            {item.label}
          </p>
        </div>
      ))}

    </div>
  );
}