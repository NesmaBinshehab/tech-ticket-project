import { useState } from "react";

export default function ProfileTabs() {
  const [tab, setTab] = useState("tickets");

  return (
    <div className="bg-white rounded-2xl shadow p-5">

      {/* Tabs */}
      <div className="flex gap-4 border-b pb-3 mb-4">

        <button
          onClick={() => setTab("tickets")}
          className={`px-4 py-2 ${
            tab === "tickets"
              ? "text-cyan-600 border-b-2 border-cyan-500"
              : "text-gray-500"
          }`}
        >
          التذاكر
        </button>

        <button
          onClick={() => setTab("settings")}
          className={`px-4 py-2 ${
            tab === "settings"
              ? "text-cyan-600 border-b-2 border-cyan-500"
              : "text-gray-500"
          }`}
        >
          الإعدادات
        </button>

      </div>

      {/* Content */}
      {tab === "tickets" ? (
        <div className="text-gray-600">
          لا توجد تذاكر حالياً...
        </div>
      ) : (
        <div className="text-gray-600">
          إعدادات الحساب هنا...
        </div>
      )}

    </div>
  );
}