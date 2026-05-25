
import { Statiscs } from "../components/Statistics.jsx";
import "../components/Statistics.css";
import "../components/TicketCard.css"
import React from "react";
import { TicketCard } from "../components/TicketCard.jsx";

const DashboardPage = () => {
  return (
    <div className="dashboard">
    <div className="Statiscs-section">
      <Statiscs title="Active Ticket" number = "47" percent= "+12% from yesterday" icon="fa-solid fa-ticket"/>
      <Statiscs title="Total Customers" number = "127" percent= "+8% from yesterday" icon= "fa-solid fa-users"/>
      <Statiscs title="Revenue Today" number = "13,150$" percent= "+15% from yesterday" icon= "fa-dollar-sign"/>
    </div>
    <div className="tickets-container">

        <div className="ticket-header">

          <h4>Ticket</h4>
          <h4>CreationDate</h4>
          <h4>Assignie</h4>
          <h4>Status</h4>

        </div>

           <TicketCard title= "download problem" description = "I can't download office programs" icon = "fa-solid fa-ticket" creationDate= "1/6/2026" assignee= "software" status="Pending"/>

    
        </div>
    </div>
  );
};

export default DashboardPage;