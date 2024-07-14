

import React from "react";
import SaplingValue from "./SaplingValue";
import StaticBox from "./StaticBox";

const SaplingsDetails = ({ sapling_master_data, saplingIn_Out_data }) => {
  return (
    <div className="flex overflow-x-scroll overflow-y-visible w-[100%]">
      <div className="static-box min-w-[30%]">
        <StaticBox />
      </div>
      <section className="left-[30%] flex  h-[417px]">
        {sapling_master_data.map((ele, index) => (
          <SaplingValue
            sapling_master_data={ele}
            key={ele.sequence_number}
            unique_value={ele.saplings_code}
            saplingIn_Out_data={saplingIn_Out_data}
          />
        ))}
      </section>
    </div>
  );
};

export default SaplingsDetails;

