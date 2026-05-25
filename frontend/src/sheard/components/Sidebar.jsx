import {
  LayoutDashboard,
  Ticket,
  FolderKanban,
} from "lucide-react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const location = useLocation();

  const menuItems = [

    {
      label: "Dashboard",
      icon: <LayoutDashboard size={19} />,
      path: "/dashboard",
    },

    {
      label: "Tickets",
      icon: <Ticket size={19} />,
      path: "/dashboard/tickets",
    },

    {
      label: "Ticket Booking",
      icon: <Ticket size={19} />,
      path: "/dashboard/booking",
    },

    {
      label: "Categories",
      icon: <FolderKanban size={19} />,
      path: "/dashboard/categories",
    },
  ];

  return (

    <div
      className="
      w-64
      bg-gradient-to-b
      from-[#007b8a]
      via-[#009fc2]
      to-[#5ccfc8]
      text-white
      flex
      flex-col
      p-5
      shadow-2xl
      border-r
      border-white/10
      "
    >

      {/* Logo */}
      <div className="mb-10">

        <h1 className="text-3xl font-bold tracking-wide">
          TichTicket
        </h1>

        <p className="text-white/80 text-sm mt-1">
          IT Support Company
        </p>

      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-2">

        {menuItems.map((item) => (

          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              transition-all
              duration-200
              text-sm
              font-medium

              ${
                location.pathname === item.path
                  ? `
                      bg-white
                      text-[#008c9e]
                      shadow-md
                    `
                  : `
                      text-white
                      hover:bg-white/20
                    `
              }
            `}
          >

            {item.icon}

            <span>
              {item.label}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}

export default Sidebar;