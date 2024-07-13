import React from "react";
import SaplingValue from "./SaplingValue";

const SaplingsDetails = ({sapling_master_data}) => {
  return (
    <div className="flex flex-row overflow-x-scroll w-[70%]">
   { sapling_master_data.map((ele,index)=>  <SaplingValue data={ele} key={sapling_master_data.sequence_number}/>)}
    
    </div>
  );
};

export default SaplingsDetails;
