import "./Statistics.css";
import "./TicketCard.css"
export const Statiscs = ({title,number,percent,icon}) => {
    return(
     <div className="sta-container">
        <div className="top-div">
            <p>{title}</p>
     <div className="div-icon">
        <i className={icon}></i>
        </div>
        </div>
     <h3>{number}</h3>
     <h5>{percent}</h5>
     </div>
    );

};