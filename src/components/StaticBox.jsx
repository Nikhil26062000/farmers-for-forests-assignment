import React from 'react'
import OwnerDeatil from './OwnerDeatil'

const StaticBox = () => {
  return (
    <div className=' w-[100%]  '>
        <p className='py-2 pr-2 bg-[#ecece5] font-bold text-sm text-end border border-[#dadada]'>WAREHOUSE NAME</p>
        <OwnerDeatil name="All stock by saplings" balance_stock_color="green"/>
        <div className="scroll-bar overflow-y-scroll h-[286px]">
        <OwnerDeatil name="Dhawalgaon-Shinde Suresh Baban" balance_stock_color="yellow"/>
        <OwnerDeatil name="Ambad-Govind Ashok kumar Lahoti" balance_stock_color="yellow"/>
        <OwnerDeatil name="Karjat-Navnath Ragunath Shinde" balance_stock_color="yellow"/>

        <OwnerDeatil name="Dummy_data_for_scrolling" balance_stock_color="yellow"/>
        <OwnerDeatil name="Dummy_data_for_scrolling" balance_stock_color="yellow"/>
        <OwnerDeatil name="Dummy_data_for_scrolling" balance_stock_color="yellow"/>
        <OwnerDeatil name="Dummy_data_for_scrolling" balance_stock_color="yellow"/>
        </div>
       


    </div>
  )
}

export default StaticBox