export const Statiscs = ({ title, number, percent, icon }) => {
  return (
    <div className="w-[250px] h-[150px] bg-white rounded-2xl shadow-sm px-6 py-4">

      <div className="flex justify-between items-center">

        <p className="text-[15px] text-black">
          {title}
        </p>

        <div className="w-8 h-8 rounded-full bg-green-100 flex justify-center items-center">

          <i className={`${icon} text-green-600`}></i>

        </div>

      </div>

      <h3 className="text-3xl font-bold text-black mt-6">
        {number}
      </h3>

      <h5 className="text-green-500 text-sm mt-3">
        {percent}
      </h5>

    </div>
  );
};









// import "./Statistics.css";
// import "./TicketCard.css"
// export const Statiscs = ({title,number,percent,icon}) => {
//     return(
//      <div className="sta-container">
//         <div className="top-div">
//             <p>{title}</p>
//      <div className="div-icon">
//         <i className={icon}></i>
//         </div>
//         </div>
//      <h3>{number}</h3>
//      <h5>{percent}</h5>
//      </div>
//     );

// };