
export const TicketCard= ({
    title,description,icon,creationDate,assignee,status,
}) => {
    return(
           <div className="ticket-row">
            <div className="ticket-info">

        <div className="div-icon2">
          <i className={icon}></i>
        </div>

        <div className="card-left">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

      </div>
          <p>{creationDate}</p>
         <p>{assignee}</p>
         <button>{status}</button>
        
    </div>
    );
};