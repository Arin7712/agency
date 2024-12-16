"use client";

import { InlineWidget } from "react-calendly";


const Calendly =  () => {

    return ( 
    <div className="w-full ">
      <InlineWidget
      styles={{ height: "500px" }}
      url="https://cal.com/aringawande/15min?month=2024-12&date=2024-12-17" />
    </div> );
}
 
export default Calendly;