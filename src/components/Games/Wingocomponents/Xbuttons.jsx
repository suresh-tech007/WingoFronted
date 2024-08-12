import React from 'react'

const Xbuttons = ({selectx=1,setSelecteX=1,value=1}) => {
     
  return (
    <button onClick={()=>setSelecteX(value)} className={`${selectx==value?"bg-orange-600 ":"bg-green-600 " }text-[0.7rem]   px-2.5 rounded-lg`}>X{value}</button>
  )
}

export default Xbuttons