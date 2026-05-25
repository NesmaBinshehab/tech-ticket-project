import { useState } from "react";

import BookingTabs from "../BookingPageComponents/BookingTabs";

import CustomerForm from "../BookingPageComponents/CustomerForm";

import ManageTickets from "../BookingPageComponents/ManageTickets";

import Refunds from "../BookingPageComponents/Refunds";

import TicketPackages from "../BookingPageComponents/TicketPackages";
function TicketBookingPage() {
  const [activeTab, setActiveTab] =
    useState("new-booking");

  const renderContent = () => {
    switch (activeTab) {

      case "new-booking":
        return (
          <div className="grid grid-cols-2 gap-4">

            <CustomerForm />

            <TicketPackages />

          </div>
        );

      case "my-tickets":
        return <ManageTickets />;

      case "refunds":
        return <Refunds />;

      default:
        return null;
    }
  };

  return (
    <div className="p-2">

      {/* Title */}
     

      {/* Tabs */}
      <BookingTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Dynamic Content */}
      {renderContent()}

    </div>
  );
}

export default TicketBookingPage;