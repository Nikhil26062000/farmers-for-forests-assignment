import React from 'react'
import StaticBox from './StaticBox'
import SaplingsDetails from './SaplingsDetails'


const Container = ({sapling_master_data}) => {
  return (
    <div className="w-[94%]  mx-auto my-[100px] flex">
        <StaticBox/>
        <SaplingsDetails sapling_master_data={sapling_master_data}/>
    </div>
  )
}

export default Container