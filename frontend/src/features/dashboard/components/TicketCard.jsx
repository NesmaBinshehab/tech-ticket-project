export const TicketCard = ({
  title,
  description,
  icon,
  creationDate,
  assignee,
  status,
}) => {
  return (
    <div
      className="
      grid grid-cols-[2.6fr_1fr_1fr_1fr]
      items-center
      px-6 py-5
      mt-4
      rounded-2xl
      border border-gray-100
      bg-white
      hover:shadow-lg
      transition
    "
    >

      <div className="flex items-center gap-4">

        <div
          className="
          w-10 h-10
          rounded-xl
          bg-pink-100
          flex justify-center items-center
        "
        >
          <i className={`${icon} text-pink-500`}></i>
        </div>

        <div className="flex flex-col">

          <h4 className="text-[15px] font-semibold text-gray-900">
            {title}
          </h4>

          <p className="text-sm text-gray-400 mt-1">
            {description}
          </p>

        </div>

      </div>

      <p className="text-sm text-gray-600">
        {creationDate}
      </p>

      <p className="text-sm text-gray-600">
        {assignee}
      </p>

      <button
        className="
        bg-black
        text-white
        px-4 py-2
        rounded-full
        text-sm
        w-fit
      "
      >
        {status}
      </button>

    </div>
  );
};













// export const TicketCard= ({
//     title,description,icon,creationDate,assignee,status,
// }) => {
//     return(
//            <div className="ticket-row">
//             <div className="ticket-info">

//         <div className="div-icon2">
//           <i className={icon}></i>
//         </div>

//         <div className="card-left">
//           <h4>{title}</h4>
//           <p>{description}</p>
//         </div>

//       </div>
//           <p>{creationDate}</p>
//          <p>{assignee}</p>
//          <button>{status}</button>
        
//     </div>
//     );
// };