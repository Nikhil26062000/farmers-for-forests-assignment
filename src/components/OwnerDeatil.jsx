import React from 'react'

const OwnerDeatil = ({name,balance_stock_color}) => {
  return (
    <div className='flex justify-between px-2 pt-[11px] pb-[10px] border border-[#dadada] bg-[#eff3ed]  '>
        <p className='text-center'>{name}</p>
        <div className='text-center'>
            <p>Total stock</p>
            <p>Total Distrubute</p>
            <p className={balance_stock_color === "green"  ? "bg-green-400" : "bg-yellow-400"}>Balance stock</p>

        </div>
    </div>
  )
}

export default OwnerDeatil