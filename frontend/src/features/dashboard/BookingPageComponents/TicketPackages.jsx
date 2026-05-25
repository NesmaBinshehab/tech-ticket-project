import { useState } from "react";

function TicketPackages() {

  const [selectedService, setSelectedService] =
    useState(null);

  const packages = [
    {
      title: "Support service",
      color: "bg-blue-500",
    },

    {
      title: "Maintenance service",
      color: "bg-purple-500",
    },

    {
      title: "Development service",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">

      <h2 className="text-lg font-semibold mb-4">
        Ticket Services
      </h2>

      <div className="space-y-3">

        {packages.map((item, index) => (

          <div
            key={index}
            onClick={() => setSelectedService(index)}
            className={`border rounded-xl p-3 flex justify-between items-center cursor-pointer transition-all duration-200

              ${
                selectedService === index
                  ? "bg-gray-100 border-gray-400"
                  : "hover:bg-gray-50"
              }
            `}
          >

            {/* Left Side */}
            <div className="flex items-center gap-3">

              {/* Colored Circle */}
              <div
                className={`w-3 h-3 rounded-full ${item.color}`}
              ></div>

              {/* Title */}
              <h3 className="font-medium text-sm">
                {item.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TicketPackages;