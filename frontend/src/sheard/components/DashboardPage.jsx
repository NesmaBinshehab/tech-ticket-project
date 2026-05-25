import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Booking from "../../features/dashboard/pages/Booking";
import Tickets from "../../features/dashboard/pages/Tickets";

function DashboardPage() {
  const location = useLocation();

  // تحديد العنوان حسب المسار
  const getTitle = () => {
    if (location.pathname.includes("tickets")) return "Tickets";
    if (location.pathname.includes("booking")) return "Booking";
    return "Dashboard";
  };

  return (
    <div className="flex h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-col flex-1">

        {/* Header ثابت */}
        <header className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold text-slate-800">
            TicketFlow
          </h1>

          <div className="text-slate-500">
            Admin Panel
          </div>
        </header>

        {/* Title ديناميكي */}
        <div className="bg-white px-8 py-5 border-b">
          <h2 className="text-3xl font-bold text-slate-700">
            {getTitle()}
          </h2>
        </div>

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">

          <Routes>
            <Route
              path="/"
              element={<h1>Dashboard</h1>}
            />

            <Route
              path="tickets"
              element={<Tickets />}
            />

            <Route
              path="booking"
              element={<Booking />}
            />
          </Routes>

        </main>

      </div>
    </div>
  );
}

export default DashboardPage;