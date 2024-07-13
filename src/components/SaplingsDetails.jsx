import React from "react";
import SaplingValue from "./SaplingValue";

const SaplingsDetails = ({ sapling_master_data, saplingIn_Out_data }) => {
  return (
    <div className="flex flex-row overflow-x-scroll w-[70%]">
      {sapling_master_data.map((ele, index) => (
        <SaplingValue
          sapling_master_data={ele}
          key={ele.sequence_number}
          unique_value = {ele.saplings_code}
          saplingIn_Out_data={saplingIn_Out_data}
        />
      ))}
    </div>
  );
};

export default SaplingsDetails;
