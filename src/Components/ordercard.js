import React from "react";
import"../Styles/ordercard.css";

function Ordercard({order}) {
    return(
        
            <div className="h_ordercard">
            <div className="h_field">Package Name: {order.data.packageName}</div>
            <div className="h_field">Package Type: {order.data.packageType}</div>
            <div className="h_field">Package Price: {order.data.packagePrice}</div>
            <div className="h_field">Booking Date: {order.data.Timestamp}</div>

            
            </div>
       
    


    );
}
export default Ordercard;
