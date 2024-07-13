import React from 'react'
import StaticBox from './StaticBox'
import SaplingsDetails from './SaplingsDetails'


const Container = ({sapling_master_data,saplingIn_Out_data}) => {
  return (
    <div className="w-[94%]  mx-auto flex">
        
        <SaplingsDetails sapling_master_data={sapling_master_data} saplingIn_Out_data={saplingIn_Out_data}/>
    </div>
  )
}

export default Container