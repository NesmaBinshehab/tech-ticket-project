
import React from "react";

import { Statiscs } from "../components/Statistics.jsx";
import { TicketCard } from "../components/TicketCard.jsx";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-8">

      <div className="flex gap-5 mb-10 flex justify-between items-center">

        <Statiscs
          title="Active Ticket"
          number="47"
          percent="+12% from yesterday"
          icon="fa-solid fa-ticket"
        />

        <Statiscs
          title="Total Customers"
          number="127"
          percent="+8% from yesterday"
          icon="fa-solid fa-users"
        />

        <Statiscs
          title="Revenue Today"
          number="13,150$"
          percent="+15% from yesterday"
          icon="fa-solid fa-dollar-sign"
        />

      </div>


      <div
        className="
        bg-white
        rounded-3xl
        p-7
        shadow-sm
      "
      >

        <div
          className="
          grid grid-cols-[2.6fr_1fr_1fr_1fr]
          items-center
          bg-[#f7f9fc]
          px-6 py-5
          rounded-2xl
          text-gray-500
          text-sm
          font-semibold
        "
        >

          <h4>Ticket</h4>

          <h4>Creation Date</h4>

          <h4>Assignee</h4>

          <h4>Status</h4>

        </div>


        <TicketCard
          title="Download Problem"
          description="I can't download office programs"
          icon="fa-solid fa-ticket"
          creationDate="1/6/2026"
          assignee="Software"
          status="Pending"
        />

      </div>

    </div>
  );
};

export default DashboardPage;