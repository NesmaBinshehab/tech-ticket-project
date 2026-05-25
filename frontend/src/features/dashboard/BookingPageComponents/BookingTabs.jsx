function BookingTabs({ activeTab, setActiveTab }) {
  const tabs = [
    "new-booking",
    "my-tickets",
    "refunds",
  ];

  return (
    <div className="flex bg-gray-200 rounded-xl p-1 mb-4">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all

            ${
              activeTab === tab
                ? "bg-white shadow"
                : "text-gray-600"
            }
          `}
        >
          {tab === "new-booking" && "New Booking"}
          {tab === "my-tickets" && "my-Tickets"}
          {tab === "refunds" && "Refunds"}
        </button>
      ))}

    </div>
  );
}

export default BookingTabs;