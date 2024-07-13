import React, { useEffect, useState } from "react";

const SaplingValue = ({
  sapling_master_data,
  saplingIn_Out_data,
  unique_value,
}) => {
  //   console.log(saplingIn_Out_data.
  //     sapling_stock_res_by_sapling.find((sap)=>sap.saplin_item_code==unique_value )
  //     );
  const [all_stock_saplings, set_All_Stock_saplings] = useState();
  const [dhawalgaon_shinde_data,set_Dhawalgaon_Shinde_Data] = useState();
  const [ambad_govind_data,set_Ambad_Govind_Data] = useState();
  const [karjat_navnath_data,set_Karjat_Navnath_Data] = useState();

  useEffect(() => {
    const foundItem = saplingIn_Out_data.sapling_stock_res_by_sapling.find(
      (sap) => sap.sapling_item_code == unique_value
    );
    // console.log(foundItem);
    set_All_Stock_saplings(foundItem && foundItem ? foundItem : 0);
    // console.log("All", all_stock_saplings && all_stock_saplings);

    const foundItem2 = saplingIn_Out_data.sapling_stock_res_by_warehouse.find(
        (sap) => sap.sapling_item_code == unique_value && sap.warehouse_code==="W0001"
      );
    
    // console.log(foundItem2);
    set_Dhawalgaon_Shinde_Data(foundItem2 && foundItem2 ? foundItem2 : 0)

    const foundItem3 = saplingIn_Out_data.sapling_stock_res_by_warehouse.find(
        (sap) => sap.sapling_item_code == unique_value && sap.warehouse_code==="W0006"
      );

      set_Ambad_Govind_Data(foundItem3 && foundItem3 ? foundItem3 : 0)
    //   console.log(foundItem3);


      const foundItem4 = saplingIn_Out_data.sapling_stock_res_by_warehouse.find(
        (sap) => sap.sapling_item_code == unique_value && sap.warehouse_code==="W0003"
      );

      set_Karjat_Navnath_Data(foundItem4 && foundItem4 ? foundItem4 : 0)
      console.log(foundItem4);

  }, []);

  return (
    <div className=" min-w-[200px]  bg-[#ffffff] border border-[#dadada] border-b-[2px]">
      <p className="bg-[#ecece5] w-[100%] text-center py-2 border border-[#dadada] text-sm font-bold">
        {sapling_master_data.saplings_name}
      </p>
      <div className="w-full   border border-[#dadada] py-2 px-2 text-end">
        <p className=" w-[100%] border pr-1">
          {all_stock_saplings && all_stock_saplings.sum_sapling_inward}
        </p>
        <p className=" w-[100%] border pr-1">
          
          {all_stock_saplings && all_stock_saplings.sum_sapling_outward!=0?all_stock_saplings.sum_sapling_outward:"-0"}
        </p>
        <p className=" w-[100%] border pr-1 bg-[#d7f0b4]">
         
          {all_stock_saplings && all_stock_saplings.sapling_balance_stock}
        </p>
      </div>

      <div className="w-full   border border-[#dadada] py-2 px-2 text-end">
        <p className=" w-[100%] border pr-1">{dhawalgaon_shinde_data && dhawalgaon_shinde_data.sum_sapling_inward}</p>
        <p className=" w-[100%] border pr-1">{dhawalgaon_shinde_data && dhawalgaon_shinde_data.sum_sapling_outward!=0?dhawalgaon_shinde_data.sum_sapling_outward:"-0"}</p>
        <p className=" w-[100%] border pr-1 bg-[#ffff00]">{dhawalgaon_shinde_data && dhawalgaon_shinde_data.sapling_balance_stock}</p>
      </div>
      <div className="w-full   border border-[#dadada] py-2 px-2 text-end">
      <p className=" w-[100%] border pr-1">{ambad_govind_data && ambad_govind_data.sum_sapling_inward}</p>
        <p className=" w-[100%] border pr-1">{ambad_govind_data && ambad_govind_data.sum_sapling_outward!=0?ambad_govind_data.sum_sapling_outward : "-0"}</p>
        <p className=" w-[100%] border pr-1 bg-[#ffff00]">{ambad_govind_data && ambad_govind_data.sapling_balance_stock}</p>
      </div>
      <div className="w-full   border border-[#dadada] py-2 px-2 text-end">
      <p className=" w-[100%] border pr-1">{karjat_navnath_data && karjat_navnath_data.sum_sapling_inward}</p>
        <p className=" w-[100%] border pr-1">{karjat_navnath_data && karjat_navnath_data.sum_sapling_outward !=0?karjat_navnath_data.sum_sapling_outward : "-0"}</p>
        <p className=" w-[100%] border pr-1 bg-[#ffff00]">{karjat_navnath_data && karjat_navnath_data.sapling_balance_stock}</p>
      </div>
    </div>
  );
};

export default SaplingValue;
